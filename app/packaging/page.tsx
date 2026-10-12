'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { Package, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PackagingPage() {
  const { t } = useLanguage();

  const packagingSolutions = [
    {
      title: t.packaging.s1Title,
      category: t.packaging.s1Category,
      description: t.packaging.s1Desc,
    },
    {
      title: t.packaging.s2Title,
      category: t.packaging.s2Category,
      description: t.packaging.s2Desc,
    },
    {
      title: t.packaging.s3Title,
      category: t.packaging.s3Category,
      description: t.packaging.s3Desc,
    },
    {
      title: t.packaging.s4Title,
      category: t.packaging.s4Category,
      description: t.packaging.s4Desc,
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.packaging.subtitle}
          title={t.packaging.title}
          description={t.packaging.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {packagingSolutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-teal-700 flex items-center justify-center mb-6 border border-brand-teal-100">
                <Package className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-gold-600 block mb-2">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-brand-navy-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Safeguards Bar */}
        <div className="bg-brand-navy-900 text-white rounded-2xl p-8 sm:p-10 border border-brand-navy-800 shadow-xl my-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.packaging.protocolTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t.packaging.protocolDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">
                  {t.packaging.badgeVentilation}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">
                  {t.packaging.badgeTemperature}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">
                  {t.packaging.badgePalletized}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title={t.packaging.ctaTitle}
          description={t.packaging.ctaDesc}
        />
      </div>
    </div>
  );
}
