import fs from 'fs/promises';
import path from 'path';
import { Inquiry, InquiryStats, InquiryStatus } from '@/types/inquiry';

const LOCAL_DATA_FILE = path.join(process.cwd(), 'data', 'inquiries.json');
const TMP_DATA_FILE = path.join('/tmp', 'inquiries.json');

// In-memory cache across serverless warm invocations
let inMemoryInquiries: Inquiry[] | null = null;

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'INQ-1736502001',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(), // 4 hours ago
    name: 'Ahmed Al-Mansoor',
    company: 'Gulf Fresh Foods LLC',
    email: 'purchasing@gulffresh.ae',
    phone: '+971501234567',
    product: 'Green Chilli',
    destination: 'Jebel Ali Port, Dubai (UAE)',
    notes: 'Require 2x 40ft reefer containers of G4 Green Chillies weekly. Please share FOB and CIF rates.',
    status: 'new'
  },
  {
    id: 'INQ-1736480000',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 day ago
    name: 'Tan Wei Ming',
    company: 'Asia Agro Imports Pte Ltd',
    email: 'twming@asiaagro.com.sg',
    phone: '+6591234567',
    product: 'Onion',
    destination: 'Port of Singapore',
    notes: 'Looking for red onions 45mm-60mm size, packed in 10kg mesh bags. Initial trial order 1 container.',
    status: 'contacted'
  },
  {
    id: 'INQ-1736390000',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(), // 2 days ago
    name: 'Mohd Razak',
    company: 'Nusantara Spices & Produce',
    email: 'razak@nusantaraspices.my',
    phone: '+60123456789',
    product: 'Moringa Powder',
    destination: 'Port Klang, Malaysia',
    notes: 'Inquiry for 500kg organic shade-dried Moringa leaf powder with phytosanitary certificates.',
    status: 'quoted'
  }
];

export async function getInquiries(): Promise<Inquiry[]> {
  if (inMemoryInquiries && inMemoryInquiries.length > 0) {
    return inMemoryInquiries;
  }

  // 1. Try reading from /tmp if previously written in serverless environment
  try {
    const tmpContent = await fs.readFile(TMP_DATA_FILE, 'utf-8');
    const parsed = JSON.parse(tmpContent);
    if (Array.isArray(parsed) && parsed.length > 0) {
      inMemoryInquiries = parsed;
      return parsed;
    }
  } catch {
    // /tmp does not exist yet or is empty, continue
  }

  // 2. Try reading from local project data file (bundled read-only in Vercel)
  try {
    const fileContent = await fs.readFile(LOCAL_DATA_FILE, 'utf-8');
    const data = JSON.parse(fileContent);
    if (Array.isArray(data)) {
      inMemoryInquiries = data;
      return data;
    }
  } catch (error: any) {
    // File not found or read error
  }

  inMemoryInquiries = INITIAL_INQUIRIES;
  return INITIAL_INQUIRIES;
}

export async function saveAllInquiries(inquiries: Inquiry[]): Promise<void> {
  // Always update in-memory state
  inMemoryInquiries = inquiries;

  // Try writing to local project path first (works in local dev)
  try {
    const dir = path.dirname(LOCAL_DATA_FILE);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(LOCAL_DATA_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
    return;
  } catch (err: any) {
    // If read-only filesystem (e.g. Vercel Serverless / AWS Lambda EROFS), write to /tmp
    try {
      await fs.writeFile(TMP_DATA_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
      return;
    } catch (tmpErr) {
      console.warn('Could not write to /tmp file, using in-memory state:', tmpErr);
    }
  }
}

export async function createInquiry(data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Promise<Inquiry> {
  const current = await getInquiries();
  const newInquiry: Inquiry = {
    id: `INQ-${Date.now()}`,
    createdAt: new Date().toISOString(),
    name: data.name.trim(),
    company: data.company?.trim() || undefined,
    email: data.email.trim(),
    phone: data.phone.trim(),
    product: data.product,
    destination: data.destination?.trim() || undefined,
    notes: data.notes?.trim() || undefined,
    status: 'new'
  };

  const updated = [newInquiry, ...current];
  await saveAllInquiries(updated);
  return newInquiry;
}

export async function updateInquiry(
  id: string,
  updates: Partial<Omit<Inquiry, 'id' | 'createdAt'>>
): Promise<Inquiry | null> {
  const current = await getInquiries();
  const index = current.findIndex((item) => item.id === id);
  if (index === -1) return null;

  current[index] = {
    ...current[index],
    ...updates,
    ...(updates.name !== undefined && { name: updates.name.trim() }),
    ...(updates.company !== undefined && { company: updates.company.trim() || undefined }),
    ...(updates.email !== undefined && { email: updates.email.trim() }),
    ...(updates.phone !== undefined && { phone: updates.phone.trim() }),
    ...(updates.product !== undefined && { product: updates.product }),
    ...(updates.destination !== undefined && { destination: updates.destination.trim() || undefined }),
    ...(updates.notes !== undefined && { notes: updates.notes.trim() || undefined }),
    ...(updates.notesInternal !== undefined && { notesInternal: updates.notesInternal.trim() || undefined })
  };

  await saveAllInquiries(current);
  return current[index];
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const current = await getInquiries();
  const filtered = current.filter((item) => item.id !== id);
  if (filtered.length === current.length) return false;

  await saveAllInquiries(filtered);
  return true;
}

export async function getInquiryStats(): Promise<InquiryStats> {
  const inquiries = await getInquiries();
  const total = inquiries.length;
  const newCount = inquiries.filter((i) => i.status === 'new').length;
  const inProgress = inquiries.filter((i) => i.status === 'contacted' || i.status === 'quoted').length;
  const closed = inquiries.filter((i) => i.status === 'closed').length;

  const productCounts: Record<string, number> = {};
  inquiries.forEach((i) => {
    productCounts[i.product] = (productCounts[i.product] || 0) + 1;
  });

  let topProduct = total > 0 ? '—' : 'None';
  let maxCount = 0;
  for (const [prod, count] of Object.entries(productCounts)) {
    if (count > maxCount) {
      maxCount = count;
      topProduct = prod;
    }
  }

  return {
    total,
    newCount,
    inProgress,
    closed,
    topProduct
  };
}
