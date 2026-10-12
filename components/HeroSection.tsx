'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
}: HeroSectionProps) {
  const { t } = useLanguage();

  const heroTitle = title || t.home.heroTitle;
  const heroSubtitle = subtitle || t.home.heroSubtitle;
  const heroDescription = description || t.home.heroDescription;

  return (
    <section className="relative overflow-hidden bg-brand-navy-900 text-white py-20 lg:py-28 border-b border-brand-navy-800">
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-brand-teal-900/40 opacity-90"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-teal-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-gold-500/10 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Subtitle / Tagline pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-800/90 border border-brand-gold-500/40 text-brand-gold-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-gold-400 animate-pulse"></span>
            {heroSubtitle}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            {heroTitle}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
            {heroDescription}
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-teal-600 hover:bg-brand-teal-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-brand-teal-900/30 hover:shadow-xl"
            >
              <span>{t.home.exploreProducts}</span>
              <ArrowRight className="w-4 h-4 text-brand-gold-300" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-navy-800/80 hover:bg-brand-navy-800 text-slate-100 font-semibold text-base border border-slate-700 hover:border-brand-gold-500/50 transition-all duration-200"
            >
              <span>{t.home.enquireForExport}</span>
              <Globe className="w-4 h-4 text-brand-gold-400" />
            </Link>
          </div>

          {/* Core Trust Badges */}
          <div className="mt-12 pt-8 border-t border-brand-navy-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-gold-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">{t.home.trustGrading}</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-brand-teal-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">{t.home.trustGlobal}</span>
            </div>
            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold-400 flex-shrink-0"></span>
              <span className="text-xs sm:text-sm font-medium">{t.home.trustBulk}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
