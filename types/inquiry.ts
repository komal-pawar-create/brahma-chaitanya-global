export type InquiryStatus = 'new' | 'contacted' | 'quoted' | 'closed';

export interface Inquiry {
  id: string;
  createdAt: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  product: string;
  destination?: string;
  notes?: string;
  status: InquiryStatus;
  notesInternal?: string;
}

export interface InquiryStats {
  total: number;
  newCount: number;
  inProgress: number;
  closed: number;
  topProduct: string;
}
