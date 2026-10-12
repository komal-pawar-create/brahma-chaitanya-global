import React from 'react';
import { notFound } from 'next/navigation';
import { getProductBySlug, getAllProductSlugs } from '@/data/products';
import ProductDetailContent from '@/components/ProductDetailContent';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}
