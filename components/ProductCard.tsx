'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedProduct } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();
  const localized = getLocalizedProduct(product, language);
  const varietyCount = localized.varieties.length;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-brand-teal-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden border-b border-slate-100">
        <Image
          src={localized.mainImage}
          alt={localized.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-navy-900/90 text-brand-gold-400 backdrop-blur-sm border border-brand-gold-500/30">
            {localized.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-brand-navy-900 group-hover:text-brand-teal-700 transition-colors">
            {localized.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {localized.tagline || 'Agricultural export product supplied by Brahma Chaitanya Global.'}
          </p>

          {/* Quick Specifications preview if available */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            {varietyCount > 0 ? (
              <span className="inline-flex items-center gap-1.5 font-medium text-brand-teal-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal-600" />
                {varietyCount} {varietyCount === 1 ? t.products.exportVarietyLabel : t.products.exportVarietiesLabel}
              </span>
            ) : (
              <span className="text-slate-400 font-medium">{t.products.exportSpecLabel}</span>
            )}
            <span className="font-semibold text-brand-gold-600 uppercase tracking-wider text-[11px]">
              {t.products.availableForExport}
            </span>
          </div>
        </div>

        {/* View Details Link */}
        <div className="mt-6 pt-2">
          <Link
            href={`/products/${localized.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-navy-900 bg-slate-50 hover:bg-brand-navy-900 hover:text-white border border-slate-200 hover:border-brand-navy-900 transition-all duration-200 group-hover:border-brand-teal-600/40"
          >
            <span>{t.products.viewSpecs}</span>
            <ArrowUpRight className="w-4 h-4 text-brand-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
