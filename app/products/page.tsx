'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import {
  Sparkles,
  ShieldCheck,
  Package,
  Plane,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
  ArrowRight,
  Home
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '6+', label: 'Export Grade Products', color: 'text-brand-teal-600' },
  { value: '100%', label: 'Farm-Direct Sourced', color: 'text-brand-gold-600' },
  { value: 'Custom', label: 'Grading & Carton Sizes', color: 'text-brand-teal-600' },
  { value: 'Air & Sea', label: 'Global Port Shipments', color: 'text-brand-gold-600' },
];

export default function ProductsPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Fresh Vegetables' | 'Organic Powders'>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const freshCount = products.filter((p) => p.category === 'Fresh Vegetables').length;
  const organicCount = products.filter((p) => p.category === 'Organic Powders').length;

  return (
    <div>
      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link
              href="/"
              className="hover:text-brand-navy-900 transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs"
            >
              <Home className="w-3.5 h-3.5 text-brand-gold-500" />
              <span>Home</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-brand-teal-700 font-bold">Export Products</span>
          </div>

          <SectionHeading
            subtitle={t.products.subtitle}
            title={t.products.title}
            description={t.products.description}
          />

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {stats.map(({ value, label, color }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <p className={`text-2xl sm:text-3xl font-bold tracking-tight ${color}`}>{value}</p>
                <p className="text-xs text-slate-500 mt-1.5 font-medium leading-tight">{label}</p>
              </div>
            ))}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                selectedCategory === 'all'
                  ? 'bg-brand-navy-900 text-white shadow-md border border-brand-navy-900'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>All Products ({products.length})</span>
            </button>

            <button
              onClick={() => setSelectedCategory('Fresh Vegetables')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                selectedCategory === 'Fresh Vegetables'
                  ? 'bg-brand-teal-700 text-white shadow-md border border-brand-teal-700'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>Fresh Vegetables ({freshCount})</span>
            </button>

            <button
              onClick={() => setSelectedCategory('Organic Powders')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                selectedCategory === 'Organic Powders'
                  ? 'bg-amber-600 text-white shadow-md border border-amber-600'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>Organic Powders ({organicCount})</span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Commercial Capabilities Banner */}
          <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-gold-600">
                  Export Customization
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-900 mt-1">
                  Need Custom Grading, Private Labeling, or Bulk Shipments?
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  We supply sea reefer containers and air-cargo consignments tailored to destination import protocols, custom carton printing, and specific sizing criteria.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold-400" />
                </Link>

                <Link
                  href="/packaging"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-navy-900 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>View Packaging</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTASection sits flush outside the padded container */}
      <CTASection
        title={t.products.customCtaTitle}
        description={t.products.customCtaDesc}
        secondaryHref="/packaging"
        secondaryText="View Export Packaging"
      />
    </div>
  );
}
