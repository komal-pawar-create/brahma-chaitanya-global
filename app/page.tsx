import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import CTASection from '@/components/CTASection';
import { products } from '@/data/products';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Portfolio"
          title="Agricultural Export Products"
          description="Explore our range of fresh produce and organic powders supplied for international markets with stringent quality sorting."
        />

        <ProductGrid products={products} />
      </section>

      {/* Corporate Call To Action */}
      <CTASection />
    </div>
  );
}
