'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import CTASection from '@/components/CTASection';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.home.portfolioSubtitle}
          title={t.home.portfolioTitle}
          description={t.home.portfolioDesc}
        />

        <ProductGrid products={products} />
      </section>

      {/* Corporate Call To Action */}
      <CTASection />
    </div>
  );
}
