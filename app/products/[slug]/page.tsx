import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getAllProductSlugs } from '@/data/products';
import ProductGallery from '@/components/ProductGallery';
import CTASection from '@/components/CTASection';
import {
  ArrowLeft,
  CheckCircle,
  Package,
  Layers,
  Ruler,
  Globe,
  Send,
} from 'lucide-react';

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

  const hasVarieties = product.varieties.length > 0;
  const hasSizes = product.sizes.length > 0;
  const hasApplications = product.applications.length > 0;
  const hasPackaging = product.packaging.length > 0;

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back Link */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-navy-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-brand-gold-500" />
            <span>Back to Products</span>
          </Link>
        </div>

        {/* Product Overview Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-5">
            <ProductGallery images={product.gallery} productName={product.name} />
          </div>

          {/* Right Column: Key Details & Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-50 text-brand-navy-900 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-navy-200">
                <span>{product.category}</span>
                <span>•</span>
                <span className="text-brand-gold-600">Export Grade</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-900 tracking-tight">
                {product.name}
              </h1>
              <p className="mt-3 text-lg text-slate-600 leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {product.description && (
              <p className="text-slate-700 leading-relaxed border-l-4 border-brand-teal-500 pl-4 py-1 text-sm bg-slate-50/50 rounded-r-lg">
                {product.description}
              </p>
            )}

            {/* Quick Action Enquiry Box */}
            <div className="bg-brand-navy-50/60 rounded-2xl p-6 border border-brand-navy-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-brand-navy-900">
                  Bulk &amp; International Inquiries
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Request export packaging options, grading sheets, and shipment schedules.
                </p>
              </div>
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex-shrink-0"
              >
                <span>Enquire Now</span>
                <Send className="w-3.5 h-3.5 text-brand-gold-400" />
              </Link>
            </div>

            {/* Varieties Section (if available) */}
            {hasVarieties && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-brand-teal-600" />
                  <h3 className="text-lg font-bold text-brand-navy-900">
                    Export Varieties &amp; Market Types
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.varieties.map((v, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                    >
                      <span className="font-semibold text-sm text-brand-navy-900">
                        {v.name}
                      </span>
                      <span className="text-xs text-brand-teal-700 font-medium mt-1">
                        {v.marketType}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Size Classification Section (if available) */}
            {hasSizes && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-brand-gold-600" />
                  <h3 className="text-lg font-bold text-brand-navy-900">
                    Size Classification
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.sizes.map((s, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-sm text-brand-navy-900 block">
                          {s.range}
                        </span>
                        {s.notes && (
                          <span className="text-[11px] text-slate-500 block">
                            {s.notes}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-gold-50 text-brand-gold-800 border border-brand-gold-200">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications & Packaging (if available) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              {hasApplications && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-teal-600" />
                    Applications
                  </h4>
                  <ul className="space-y-1.5">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hasPackaging && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-brand-gold-500" />
                    Packaging Details
                  </h4>
                  <ul className="space-y-1.5">
                    {product.packaging.map((pack, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500"></span>
                        {pack}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <CTASection
        title={`Inquire About Exporting ${product.name}`}
        description={`Contact our export division to request quotation, minimum order quantities, and packaging specifications for ${product.name}.`}
      />
    </div>
  );
}
