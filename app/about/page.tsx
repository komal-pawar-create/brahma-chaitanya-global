'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import {
  CheckCircle, Globe2, Truck, Users, BarChart3,
  MapPin, Handshake, ShieldCheck
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const stats = [
  { value: '15+',  label: 'Export Countries',     color: 'text-brand-teal-600'  },
  { value: '100%', label: 'Quality Sorted Batches', color: 'text-brand-gold-600' },
  { value: 'Bulk', label: 'Commercial Orders',     color: 'text-brand-teal-600'  },
  { value: 'APEDA',label: 'Registered Exporter',   color: 'text-brand-gold-600' },
];

const highlights = [
  { icon: Globe2,    label: 'Global Reach',       desc: 'Supplying across Asia, Middle East & Europe' },
  { icon: Truck,     label: 'Reliable Logistics', desc: 'On-time container dispatch & temperature care' },
  { icon: Users,     label: 'Trade Partnerships', desc: 'Long-term relationships with overseas importers' },
  { icon: BarChart3, label: 'Consistent Supply',  desc: 'Year-round procurement from verified farms' },
];

const pillarAccents = [
  { bar: 'bg-brand-teal-500', bg: 'bg-brand-teal-50',  border: 'border-brand-teal-100',  icon: 'text-brand-teal-600'  },
  { bar: 'bg-amber-400',      bg: 'bg-amber-50',        border: 'border-amber-100',        icon: 'text-amber-600'       },
  { bar: 'bg-emerald-500',    bg: 'bg-emerald-50',      border: 'border-emerald-100',      icon: 'text-emerald-600'     },
  { bar: 'bg-brand-navy-600', bg: 'bg-brand-navy-50',   border: 'border-brand-navy-100',   icon: 'text-brand-navy-700' },
];

export default function AboutPage() {
  const { t } = useLanguage();

  const bullets = [
    { text: t.about.bullet1, icon: ShieldCheck },
    { text: t.about.bullet2, icon: Handshake   },
    { text: t.about.bullet3, icon: MapPin       },
  ];

  return (
    <div>
      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          subtitle={t.about.subtitle}
          title={t.about.title}
          description={t.about.description}
        />

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map(({ value, label, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
              <p className={`text-2xl sm:text-3xl font-bold tracking-tight ${color}`}>{value}</p>
              <p className="text-xs text-slate-500 mt-1.5 font-medium leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* Main 2-col section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">

          {/* Left: text + bullets */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-navy-900">{t.about.introTitle}</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{t.about.p1}</p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{t.about.p2}</p>

            <div className="space-y-3 pt-2">
              {bullets.map(({ text, icon: Icon }) => (
                <div key={text} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal-50 border border-brand-teal-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-brand-teal-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 leading-snug pt-0.5">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dark card */}
          <div className="bg-brand-navy-900 text-white rounded-2xl overflow-hidden border border-brand-navy-800 shadow-xl">
            {/* Card header */}
            <div className="p-8 sm:p-10">
              <span className="text-xs font-bold tracking-wider uppercase text-brand-gold-400 bg-brand-navy-800 px-3 py-1 rounded-full border border-brand-gold-500/30">
                {t.about.cardBadge}
              </span>
              <h4 className="text-xl font-bold text-white mt-5 mb-3">{t.about.cardTitle}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{t.about.cardDesc}</p>
            </div>

            {/* White stat tiles inside dark card */}
            <div className="grid grid-cols-2 gap-3 px-6 sm:px-8 pb-8">
              <div className="bg-white rounded-xl p-4">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">{t.about.tradeScopeLabel}</span>
                <span className="text-sm font-bold text-brand-teal-600">{t.about.tradeScopeVal}</span>
              </div>
              <div className="bg-white rounded-xl p-4">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">{t.about.sectorLabel}</span>
                <span className="text-sm font-bold text-brand-gold-600">{t.about.sectorVal}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {highlights.map(({ icon: Icon, label, desc }, i) => {
            const accent = pillarAccents[i];
            return (
              <div key={label} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden flex">
                <div className={`w-1.5 flex-shrink-0 ${accent.bar} rounded-l-2xl`} />
                <div className="flex-1 p-5">
                  <div className={`w-10 h-10 rounded-xl ${accent.bg} ${accent.icon} flex items-center justify-center mb-4 border ${accent.border}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-brand-navy-900 mb-1">{label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    <CTASection />
  </div>
);
}
