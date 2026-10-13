'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import {
  ShieldCheck, CheckCircle2, Search, Thermometer,
  Layers, Award, Leaf, PackageCheck, FlaskConical,
  ArrowRight, MoveRight, Tractor, ScanLine, Box, Ship,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─── Static data ──────────────────────────────────────────────────────────── */

const stats = [
  { value: '15+',    label: 'Export Countries',          color: 'text-brand-teal-600' },
  { value: '100%',   label: 'Farm-to-Port Traceability', color: 'text-brand-gold-600' },
  { value: '3-Step', label: 'Inspection Process',        color: 'text-brand-teal-600' },
  { value: 'APEDA',  label: 'Registered Exporter',       color: 'text-brand-gold-600' },
];

const pillarAccents = [
  { bar: 'bg-brand-teal-500',  bg: 'bg-brand-teal-50',  border: 'border-brand-teal-100',  icon: 'text-brand-teal-600'  },
  { bar: 'bg-amber-400',       bg: 'bg-amber-50',        border: 'border-amber-100',        icon: 'text-amber-600'       },
  { bar: 'bg-brand-navy-600',  bg: 'bg-brand-navy-50',   border: 'border-brand-navy-100',   icon: 'text-brand-navy-700' },
  { bar: 'bg-emerald-500',     bg: 'bg-emerald-50',      border: 'border-emerald-100',       icon: 'text-emerald-700'    },
];

const certifications = [
  { icon: Award,        label: 'APEDA Certified'          },
  { icon: Leaf,         label: 'Phytosanitary Compliant'  },
  { icon: PackageCheck, label: 'Export Grade Packaging'   },
  { icon: FlaskConical, label: 'Lab Tested Produce'       },
];

/* Journey steps - icon / label pairs for the visual flow */
const journeyIcons = [Tractor, Search, ScanLine, Box, Ship];
const journeyLabels = [
  'Farm Procurement',
  'Sorting & Grading',
  'Size Classification',
  'Carton Packing',
  'Container Dispatch',
];

export default function QualityPage() {
  const { t } = useLanguage();

  const qualityPillars = [
    { icon: Search,      title: t.quality.p1Title, description: t.quality.p1Desc },
    { icon: Thermometer, title: t.quality.p2Title, description: t.quality.p2Desc },
    { icon: Layers,      title: t.quality.p3Title, description: t.quality.p3Desc },
    { icon: ShieldCheck, title: t.quality.p4Title, description: t.quality.p4Desc },
  ];

  const workflowSteps = [
    { step: '01', label: t.quality.stepSource,   color: 'text-brand-teal-400',  check: 'text-brand-teal-400'  },
    { step: '02', label: t.quality.stepCheck,    color: 'text-brand-gold-400',  check: 'text-brand-gold-400'  },
    { step: '03', label: t.quality.stepDispatch, color: 'text-emerald-400',     check: 'text-emerald-400'     },
  ];

  return (
    <div>
      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <SectionHeading
          subtitle={t.quality.subtitle}
          title={t.quality.title}
          description={t.quality.description}
        />

        {/* ── Stats bar ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map(({ value, label, color }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <p className={`text-2xl sm:text-3xl font-bold tracking-tight ${color}`}>{value}</p>
              <p className="text-xs text-slate-500 mt-1.5 font-medium leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Quality pillar cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {qualityPillars.map((pillar, idx) => {
            const Icon   = pillar.icon;
            const accent = pillarAccents[idx];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group overflow-hidden flex"
              >
                {/* Left colour bar */}
                <div className={`w-1.5 flex-shrink-0 ${accent.bar} rounded-l-2xl`} />

                <div className="flex-1 p-7">
                  <div className={`w-11 h-11 rounded-xl ${accent.bg} ${accent.icon} flex items-center justify-center mb-5 border ${accent.border}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy-900 mb-2 group-hover:text-brand-teal-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Certification badges ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {certifications.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-brand-navy-900 text-white rounded-xl px-4 py-3.5 border border-brand-navy-800 shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-brand-gold-400" />
              </div>
              <span className="text-xs font-semibold leading-tight">{label}</span>
            </div>
          ))}
        </div>

        {/* ── Full farm-to-port journey ── */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10 mb-14">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600">
              Our Process
            </span>
            <h3 className="text-2xl font-bold text-brand-navy-900 mt-2">
              Farm to Port — Every Step Verified
            </h3>
          </div>

          {/* Horizontal step flow */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2">
            {journeyLabels.map((label, i) => {
              const Icon = journeyIcons[i];
              const isLast = i === journeyLabels.length - 1;
              return (
                <React.Fragment key={label}>
                  <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-3 text-center flex-1 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-navy-900 text-brand-gold-400 flex items-center justify-center flex-shrink-0 border-2 border-brand-gold-500/40 shadow-md">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="sm:mt-0">
                      <p className="text-[11px] sm:text-xs font-bold text-brand-navy-900 leading-tight">{label}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Step {i + 1}</p>
                    </div>
                  </div>
                  {!isLast && (
                    <MoveRight className="hidden sm:block w-5 h-5 text-slate-300 flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ── Inspection Workflow banner ── */}
        <div className="bg-brand-navy-900 rounded-2xl overflow-hidden border border-brand-navy-800 shadow-xl">

          {/* Header */}
          <div className="px-8 sm:px-12 pt-10 pb-8 text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold-400 bg-brand-navy-800 px-4 py-1.5 rounded-full border border-brand-gold-500/30 inline-block mb-4">
              {t.quality.workflowTag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">{t.quality.workflowTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mt-3 max-w-2xl mx-auto">{t.quality.workflowDesc}</p>
          </div>

          {/* 3 white step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 sm:px-10 pb-8">
            {workflowSteps.map(({ step, label, color, check }, i) => {
              const StepIcon = [ScanLine, Search, Ship][i];
              const stepDescs = [
                'Every batch is traced back to verified farm sources before processing begins.',
                'Produce is checked for size, colour uniformity, and export grade compliance.',
                'Final physical inspection ensures cartons meet destination phytosanitary norms.',
              ];
              const iconBg = ['bg-brand-teal-50 border-brand-teal-100', 'bg-amber-50 border-amber-100', 'bg-emerald-50 border-emerald-100'][i];
              const iconColor = ['text-brand-teal-600', 'text-amber-600', 'text-emerald-600'][i];
              const numColor = ['text-brand-teal-500', 'text-amber-500', 'text-emerald-500'][i];

              return (
                <div key={step} className="bg-white rounded-xl p-6 flex flex-col gap-4">
                  {/* Step number */}
                  <span className={`text-4xl font-black ${numColor} leading-none`}>{step}</span>

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl ${iconBg} border flex items-center justify-center`}>
                    <StepIcon className={`w-5 h-5 ${iconColor}`} />
                  </div>

                  {/* Label + desc */}
                  <div>
                    <p className="text-sm font-bold text-brand-navy-900 mb-1">{label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{stepDescs[i]}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="px-8 sm:px-10 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Every shipment is tracked and verified against the buyer&apos;s proforma specification.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-teal-600 hover:bg-brand-teal-700 text-white text-xs font-bold transition-all shadow-md hover:shadow-lg group flex-shrink-0"
            >
              Request Quality Docs
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        </div>
      </div>

      <CTASection
        title={t.quality.ctaTitle}
        description={t.quality.ctaDesc}
      />
    </div>
  );
}
