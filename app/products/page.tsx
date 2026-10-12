'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import CTASection from '@/components/CTASection';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.products.subtitle}
          title={t.products.title}
          description={t.products.description}
        />

        <div className="my-10">
          <ProductGrid products={products} />
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title={t.products.customCtaTitle}
          description={t.products.customCtaDesc}
        />
      </div>
    </div>
  );
}
