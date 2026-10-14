import fs from 'fs/promises';
import path from 'path';
import { neon } from '@neondatabase/serverless';
import { Inquiry, InquiryStats, InquiryStatus } from '@/types/inquiry';

const LOCAL_DATA_FILE = path.join(process.cwd(), 'data', 'inquiries.json');
const TMP_DATA_FILE = path.join('/tmp', 'inquiries.json');

// In-memory cache across serverless warm invocations
let inMemoryInquiries: Inquiry[] | null = null;
let tableInitialized = false;

// Neon PostgreSQL active database connector


function getDb() {
  const dbUrl =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.STORAGE_URL ||
    process.env.STORAGE_DATABASE_URL ||
    process.env.STORAGE_POSTGRES_URL ||
    process.env.DATABASE_URL_UNPOOLED ||
    '';

  if (!dbUrl) {
    return null;
  }

  return neon(dbUrl);
}

async function ensureTable(sql: any) {
  if (tableInitialized) return;
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        name TEXT NOT NULL,
        company TEXT,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        product TEXT NOT NULL,
        destination TEXT,
        notes TEXT,
        status TEXT NOT NULL DEFAULT 'new',
        notes_internal TEXT
      );
    `;
    tableInitialized = true;
  } catch (err) {
    console.error('Error ensuring inquiries table in Neon:', err);
  }
}

export async function getInquiries(): Promise<Inquiry[]> {
  // 1. Try fetching from Neon Postgres Database if connected
  const sql = getDb();
  if (sql) {
    try {
      await ensureTable(sql);
      const rows = await sql`
        SELECT id, created_at, name, company, email, phone, product, destination, notes, status, notes_internal
        FROM inquiries
        ORDER BY created_at DESC;
      `;

      if (Array.isArray(rows)) {
        return rows.map((r: any) => ({
          id: r.id,
          createdAt: r.created_at,
          name: r.name,
          company: r.company || undefined,
          email: r.email,
          phone: r.phone,
          product: r.product,
          destination: r.destination || undefined,
          notes: r.notes || undefined,
          status: (r.status as InquiryStatus) || 'new',
          notesInternal: r.notes_internal || undefined,
        }));
      }
    } catch (err) {
      console.error('Error querying inquiries from Neon Postgres:', err);
    }
  }

  // 2. If no database or database unavailable, use in-memory cache
  if (inMemoryInquiries && inMemoryInquiries.length > 0) {
    return inMemoryInquiries;
  }

  // 3. Fallback: try reading from /tmp if previously written in serverless
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

  // 4. Fallback: try reading from bundled project file
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

  inMemoryInquiries = [];
  return [];
}

export async function saveAllInquiries(inquiries: Inquiry[]): Promise<void> {
  inMemoryInquiries = inquiries;

  // Try writing to local project path first (works in local dev)
  try {
    const dir = path.dirname(LOCAL_DATA_FILE);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(LOCAL_DATA_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
    return;
  } catch (err: any) {
    // If read-only filesystem (Vercel / Lambda EROFS), fallback to /tmp
    try {
      await fs.writeFile(TMP_DATA_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
      return;
    } catch (tmpErr) {
      console.warn('Could not write to /tmp file, using in-memory state:', tmpErr);
    }
  }
}

export async function createInquiry(data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Promise<Inquiry> {
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

  // 1. Save directly to Neon Postgres if connected
  const sql = getDb();
  if (sql) {
    try {
      await ensureTable(sql);
      await sql`
        INSERT INTO inquiries (id, created_at, name, company, email, phone, product, destination, notes, status)
        VALUES (
          ${newInquiry.id},
          ${newInquiry.createdAt},
          ${newInquiry.name},
          ${newInquiry.company || null},
          ${newInquiry.email},
          ${newInquiry.phone},
          ${newInquiry.product},
          ${newInquiry.destination || null},
          ${newInquiry.notes || null},
          ${newInquiry.status}
        );
      `;
      return newInquiry;
    } catch (err) {
      console.error('Error inserting inquiry into Neon Postgres:', err);
    }
  }

  // 2. Fallback to local / tmp storage
  const current = await getInquiries();
  const updated = [newInquiry, ...current];
  await saveAllInquiries(updated);
  return newInquiry;
}

export async function updateInquiry(
  id: string,
  updates: Partial<Omit<Inquiry, 'id' | 'createdAt'>>
): Promise<Inquiry | null> {
  const sql = getDb();
  if (sql) {
    try {
      await ensureTable(sql);
      const existing = await sql`SELECT * FROM inquiries WHERE id = ${id} LIMIT 1;`;
      if (Array.isArray(existing) && existing.length > 0) {
        const row = existing[0];

        const name = updates.name !== undefined ? updates.name.trim() : row.name;
        const company = updates.company !== undefined ? updates.company.trim() || null : row.company;
        const email = updates.email !== undefined ? updates.email.trim() : row.email;
        const phone = updates.phone !== undefined ? updates.phone.trim() : row.phone;
        const product = updates.product !== undefined ? updates.product : row.product;
        const destination = updates.destination !== undefined ? updates.destination.trim() || null : row.destination;
        const notes = updates.notes !== undefined ? updates.notes.trim() || null : row.notes;
        const status = updates.status !== undefined ? updates.status : row.status;
        const notesInternal = updates.notesInternal !== undefined ? updates.notesInternal.trim() || null : row.notes_internal;

        await sql`
          UPDATE inquiries
          SET
            name = ${name},
            company = ${company},
            email = ${email},
            phone = ${phone},
            product = ${product},
            destination = ${destination},
            notes = ${notes},
            status = ${status},
            notes_internal = ${notesInternal}
          WHERE id = ${id};
        `;

        return {
          id,
          createdAt: row.created_at,
          name,
          company: company || undefined,
          email,
          phone,
          product,
          destination: destination || undefined,
          notes: notes || undefined,
          status,
          notesInternal: notesInternal || undefined
        };
      }
    } catch (err) {
      console.error('Error updating inquiry in Neon Postgres:', err);
    }
  }

  // Fallback to local / tmp storage
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
  const sql = getDb();
  if (sql) {
    try {
      await ensureTable(sql);
      await sql`DELETE FROM inquiries WHERE id = ${id};`;
      return true;
    } catch (err) {
      console.error('Error deleting inquiry in Neon Postgres:', err);
    }
  }

  // Fallback to local / tmp storage
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
