import { Language } from './language';

export interface ProductVariety {
  name: string;
  marketType: string;
  description?: string;
}

export interface ProductSize {
  range: string;
  label: string;
  notes?: string;
}

export interface ProductLocalizedContent {
  name: string;
  category: string;
  tagline: string;
  description: string;
  varieties?: { name: string; marketType: string }[];
  sizes?: { range: string; label: string; notes?: string }[];
  applications?: string[];
  packaging?: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  botanicalName?: string;
  category: string;
  tagline: string;
  description: string;
  mainImage: string;
  gallery: string[];
  varieties: ProductVariety[];
  sizes: ProductSize[];
  applications: string[];
  packaging: string[];
  isFeatured?: boolean;
  translations?: Partial<Record<Language, ProductLocalizedContent>>;
}
