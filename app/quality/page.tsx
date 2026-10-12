'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { ShieldCheck, CheckCircle2, Search, Thermometer, Layers } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function QualityPage() {
  const { t } = useLanguage();

  const qualityPillars = [
    {
      icon: Search,
      title: t.quality.p1Title,
      description: t.quality.p1Desc,
    },
    {
      icon: Thermometer,
      title: t.quality.p2Title,
      description: t.quality.p2Desc,
    },
    {
      icon: Layers,
      title: t.quality.p3Title,
      description: t.quality.p3Desc,
    },
    {
      icon: ShieldCheck,
      title: t.quality.p4Title,
      description: t.quality.p4Desc,
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.quality.subtitle}
          title={t.quality.title}
          description={t.quality.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {qualityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-teal-700 flex items-center justify-center mb-6 border border-brand-teal-100">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality Commitment Banner */}
        <div className="bg-brand-navy-900 text-white rounded-2xl p-8 sm:p-10 border border-brand-navy-800 shadow-xl my-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-gold-400 block mb-2">
              {t.quality.workflowTag}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.quality.workflowTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t.quality.workflowDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">
                  {t.quality.stepSource}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">
                  {t.quality.stepCheck}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">
                  {t.quality.stepDispatch}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title={t.quality.ctaTitle}
          description={t.quality.ctaDesc}
        />
      </div>
    </div>
  );
}
