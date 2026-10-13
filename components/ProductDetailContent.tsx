'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { getLocalizedProduct, products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import ProductGallery from '@/components/ProductGallery';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';
import {
  ArrowLeft,
  CheckCircle,
  Package,
  Layers,
  Ruler,
  Send,
  MessageCircle,
  Ship,
  Thermometer,
  Boxes,
  Clock,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

interface ProductDetailContentProps {
  product: Product;
}

export default function ProductDetailContent({ product }: ProductDetailContentProps) {
  const { language, t } = useLanguage();
  const localized = getLocalizedProduct(product, language);

  const hasVarieties = localized.varieties.length > 0;
  const hasSizes = localized.sizes.length > 0;
  const hasApplications = localized.applications.length > 0;
  const hasPackaging = localized.packaging.length > 0;

  // Other products for recommendations
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  const isVegetable = product.category === 'Fresh Vegetables';

  const containerSpecs = isVegetable
    ? [
        { label: 'Container Mode', value: '40ft High-Cube Reefer' },
        { label: 'Airflow & Vent', value: 'Ventilated 15-25% Opening' },
        { label: 'Transit Temperature', value: '8°C to 12°C Controlled' },
        { label: 'Pallet Capacity', value: '20-22 Pallets / 40ft FCL' },
        { label: 'Carton Stacking', value: 'Edge-Reinforced Interlocked' },
        { label: 'Departure Port', value: 'JNPT Nhava Sheva / Mumbai Air' },
      ]
    : [
        { label: 'Container Mode', value: '20ft / 40ft Dry Standard' },
        { label: 'Moisture Barrier', value: 'Triple-Layered Foil Pack' },
        { label: 'Storage Condition', value: 'Cool, Dry & Light-Shielded' },
        { label: 'Pallet Configuration', value: 'Standard Export Pallets' },
        { label: 'Carton Specs', value: 'Multi-Ply Corrugated Cartons' },
        { label: 'Departure Port', value: 'JNPT Nhava Sheva / Mumbai Air' },
      ];

  const whatsappMessage = encodeURIComponent(
    `Hello Brahma Chaitanya Global, I am interested in an export quotation for ${localized.name}. Please share current availability, minimum order quantity, and FOB/CIF rates.`
  );

  return (
    <div>
      <div className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-navy-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-brand-gold-500" />
              <span>{t.products.backToProducts}</span>
            </Link>

            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal-700 bg-brand-teal-50 px-3 py-1 rounded-full border border-brand-teal-100">
              Commercial Export Specification
            </span>
          </div>

          {/* Product Overview Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Left Column: Gallery */}
            <div className="lg:col-span-5">
              <ProductGallery images={localized.gallery} productName={localized.name} />
            </div>

            {/* Right Column: Key Details & Specifications */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-50 text-brand-navy-900 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-navy-200">
                  <span>{localized.category}</span>
                  <span>•</span>
                  <span className="text-brand-gold-600">{t.products.exportGrade}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-900 tracking-tight">
                  {localized.name}
                </h1>
                <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {localized.tagline}
                </p>
              </div>

              {localized.description && (
                <p className="text-slate-700 leading-relaxed border-l-4 border-brand-teal-500 pl-4 py-2 text-sm bg-slate-50/80 rounded-r-xl">
                  {localized.description}
                </p>
              )}

              {/* Quick Action Enquiry Box */}
              <div className="bg-brand-navy-900 text-white rounded-2xl p-6 border border-brand-navy-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {t.products.bulkInquiryTitle}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Request CIF or FOB quotations tailored to your destination port.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
                  <a
                    href={`https://wa.me/919850153181?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                    title="Direct WhatsApp Quote"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-navy-950 text-xs font-bold transition-all shadow-md"
                  >
                    <span>Formal Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Varieties Section (if available) */}
              {hasVarieties && (
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-brand-teal-600" />
                    <h3 className="text-lg font-bold text-brand-navy-900">
                      {t.products.varietiesHeading}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {localized.varieties.map((v, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between"
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
                      {t.products.sizesHeading}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {localized.sizes.map((s, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between"
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
                      {t.products.applicationsHeading}
                    </h4>
                    <ul className="space-y-1.5">
                      {localized.applications.map((app, idx) => (
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
                      {t.products.packagingHeading}
                    </h4>
                    <ul className="space-y-1.5">
                      {localized.packaging.map((pack, idx) => (
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

          {/* Commercial Container Loading & Transit Specifications Card */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Ship className="w-5 h-5 text-brand-teal-600" />
                <h3 className="text-sm font-bold text-brand-navy-900 uppercase tracking-wider">
                  Commercial Container Loading & Freight Parameters
                </h3>
              </div>
              <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                FOB / CIF Basis
              </span>
            </div>

            <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {containerSpecs.map(({ label, value }) => (
                <div key={label} className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {label}
                  </span>
                  <span className="text-xs font-bold text-brand-navy-900 block mt-1">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Export Products Carousel */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600">
                    Recommended Produce
                  </span>
                  <h3 className="text-2xl font-bold text-brand-navy-900 mt-1">
                    Other Products Available for Combined Shipments
                  </h3>
                </div>

                <Link
                  href="/products"
                  className="text-xs font-bold text-brand-teal-700 hover:text-brand-teal-800 transition-colors hidden sm:block"
                >
                  View All Products &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <CTASection
        title={`${t.products.inquireAboutTitle} ${localized.name}`}
        description={`${t.products.inquireAboutDesc} ${localized.name}.`}
        secondaryHref="/packaging"
        secondaryText="Packaging Specs"
      />
    </div>
  );
}
