'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import {
  Package, CheckCircle2, Box, Wind, Thermometer,
  Container, Tag, ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const packagingIcons = [Box, Wind, Package, Tag];

const pillarAccents = [
  { bar: 'bg-brand-teal-500', bg: 'bg-brand-teal-50',  border: 'border-brand-teal-100',  icon: 'text-brand-teal-600'  },
  { bar: 'bg-amber-400',      bg: 'bg-amber-50',        border: 'border-amber-100',        icon: 'text-amber-600'       },
  { bar: 'bg-emerald-500',    bg: 'bg-emerald-50',      border: 'border-emerald-100',      icon: 'text-emerald-600'     },
  { bar: 'bg-brand-navy-600', bg: 'bg-brand-navy-50',   border: 'border-brand-navy-100',   icon: 'text-brand-navy-700' },
];

const protocolBadges = [
  { icon: Wind,        label: 'Ventilation Optimized', color: 'text-brand-teal-500',  numColor: 'text-brand-teal-500'  },
  { icon: Thermometer, label: 'Temperature Safeguards', color: 'text-amber-500',       numColor: 'text-amber-500'       },
  { icon: Container,   label: 'Palletized Handling',    color: 'text-emerald-500',     numColor: 'text-emerald-500'     },
];

export default function PackagingPage() {
  const { t } = useLanguage();

  const packagingSolutions = [
    { title: t.packaging.s1Title, category: t.packaging.s1Category, description: t.packaging.s1Desc },
    { title: t.packaging.s2Title, category: t.packaging.s2Category, description: t.packaging.s2Desc },
    { title: t.packaging.s3Title, category: t.packaging.s3Category, description: t.packaging.s3Desc },
    { title: t.packaging.s4Title, category: t.packaging.s4Category, description: t.packaging.s4Desc },
  ];

  return (
    <div>
      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          subtitle={t.packaging.subtitle}
          title={t.packaging.title}
          description={t.packaging.description}
        />

        {/* Packaging solution cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {packagingSolutions.map((item, index) => {
            const Icon   = packagingIcons[index];
            const accent = pillarAccents[index];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group overflow-hidden flex"
              >
                {/* Left colour bar */}
                <div className={`w-1.5 flex-shrink-0 ${accent.bar} rounded-l-2xl`} />

                <div className="flex-1 p-7">
                  <div className={`w-11 h-11 rounded-xl ${accent.bg} ${accent.icon} flex items-center justify-center mb-4 border ${accent.border}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-bold text-brand-gold-600 block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy-900 mb-2 group-hover:text-brand-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Export Packing Protocol — dark banner with white cards */}
        <div className="bg-brand-navy-900 rounded-2xl overflow-hidden border border-brand-navy-800 shadow-xl">

          {/* Header */}
          <div className="px-8 sm:px-12 pt-10 pb-8 text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold-400 bg-brand-navy-800 px-4 py-1.5 rounded-full border border-brand-gold-500/30 inline-block mb-4">
              Packaging Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">{t.packaging.protocolTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mt-3 max-w-2xl mx-auto">{t.packaging.protocolDesc}</p>
          </div>

          {/* White protocol cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 sm:px-10 pb-8">
            {protocolBadges.map(({ icon: Icon, label, color, numColor }, i) => (
              <div key={label} className="bg-white rounded-xl p-6 flex flex-col gap-4">
                <span className={`text-4xl font-black ${numColor} leading-none`}>0{i + 1}</span>
                <div className={`w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy-900 mb-1">{label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {[
                      'Ventilated carton design ensures airflow and freshness retention during long-haul transit.',
                      'Cold-chain protocols maintain optimal temperature from packing to port loading.',
                      'Standardized pallet configuration for container efficiency and safe stacking.',
                    ][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-8 sm:px-10 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              All packaging is compliant with destination country import regulations and phytosanitary requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-teal-600 hover:bg-brand-teal-700 text-white text-xs font-bold transition-all shadow-md hover:shadow-lg group flex-shrink-0"
            >
              Discuss Custom Packaging
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        </div>
      </div>

      <CTASection
        title={t.packaging.ctaTitle}
        description={t.packaging.ctaDesc}
      />
    </div>
  );
}
