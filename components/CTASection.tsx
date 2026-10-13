'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Send, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface CTASectionProps {
  title?: string;
  description?: string;
  secondaryHref?: string;
  secondaryText?: string;
}

export default function CTASection({
  title,
  description,
  secondaryHref,
  secondaryText,
}: CTASectionProps) {
  const { t } = useLanguage();
  const pathname = usePathname();

  const ctaTitle = title || t.cta.title;
  const ctaDesc = description || t.cta.description;

  // Determine secondary button target
  let finalSecondaryHref = secondaryHref;
  let finalSecondaryText = secondaryText;

  if (!finalSecondaryHref) {
    if (pathname === '/products') {
      finalSecondaryHref = '/packaging';
      finalSecondaryText = finalSecondaryText || 'Export Packaging';
    } else {
      finalSecondaryHref = '/products';
      finalSecondaryText = finalSecondaryText || t.cta.viewProducts;
    }
  }

  return (
    <section className="bg-slate-50/90 py-14 sm:py-20 border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy-900 text-white border-2 border-brand-navy-800/80 shadow-2xl p-8 sm:p-14 lg:p-16 text-center">
          {/* Top gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold-600 via-brand-gold-400 to-brand-teal-500" />

          {/* Subtle grid pattern inside card */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Glow blobs inside card */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-0 w-72 h-40 bg-brand-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-800 text-brand-gold-400 text-xs font-bold uppercase tracking-widest mb-6 border border-brand-gold-500/30 shadow-sm">
              <Globe className="w-3.5 h-3.5" />
              <span>{t.cta.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {ctaTitle}
            </h2>

            {/* Description */}
            <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {ctaDesc}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-navy-950 font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-brand-gold-500/25 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <span>{t.cta.enquireNow}</span>
                <Send className="w-4 h-4" />
              </Link>

              <Link
                href={finalSecondaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all duration-200 border border-white/20 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <span>{finalSecondaryText || t.cta.viewProducts}</span>
                <ArrowRight className="w-4 h-4 text-brand-teal-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
