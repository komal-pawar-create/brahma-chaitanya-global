'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.about.subtitle}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-12">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <h3 className="text-2xl font-bold text-brand-navy-900">
              {t.about.introTitle}
            </h3>
            <p>
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800">
                  {t.about.bullet1}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800">
                  {t.about.bullet2}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800">
                  {t.about.bullet3}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-brand-navy-900 text-white rounded-2xl p-8 sm:p-10 border border-brand-navy-800 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold-400 bg-brand-navy-800 px-3 py-1 rounded-full border border-brand-gold-500/30">
                {t.about.cardBadge}
              </span>
              <h4 className="text-2xl font-bold text-white">
                {t.about.cardTitle}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.about.cardDesc}
              </p>
              <div className="pt-4 border-t border-brand-navy-800 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">
                    {t.about.tradeScopeLabel}
                  </span>
                  <span className="text-sm font-semibold text-brand-teal-300">
                    {t.about.tradeScopeVal}
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">
                    {t.about.sectorLabel}
                  </span>
                  <span className="text-sm font-semibold text-brand-gold-300">
                    {t.about.sectorVal}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
