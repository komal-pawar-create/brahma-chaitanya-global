import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import CTASection from '@/components/CTASection';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Complete Catalog"
          title="Export Agricultural Products"
          description="Browse our initial range of fresh vegetables and organic dehydrated powders prepared to global export specifications."
        />

        <div className="my-10">
          <ProductGrid products={products} />
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title="Need Custom Export Specifications or Quantities?"
          description="We cater to customized grading, size sorting, and private label carton requirements for international bulk buyers."
        />
      </div>
    </div>
  );
}
