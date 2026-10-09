import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { Globe, Award, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="About Us"
          title="Brahma Chaitanya Global"
          description="Agricultural products supplier and exporter dedicated to bridging global demand with reliable agricultural supply chains."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-12">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <h3 className="text-2xl font-bold text-brand-navy-900">
              International Import &amp; Export Solutions
            </h3>
            <p>
              Brahma Chaitanya Global operates in the supply and export of selected agricultural produce, including fresh green chillies, onions, potatoes, tomatoes, and specialized agro powders like moringa and mushroom powder.
            </p>
            <p>
              Our operations emphasize consistent grading, export packaging, and transparent trade practices to meet the exact specifications of overseas importers and wholesale distributors.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800">
                  Reliable procurement and export-oriented quality sorting
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800">
                  Customized export packing solutions based on destination norms
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800">
                  Dedicated customer communication for bulk orders &amp; shipments
                </span>
              </div>
            </div>
          </div>

          <div className="bg-brand-navy-900 text-white rounded-2xl p-8 sm:p-10 border border-brand-navy-800 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold-400 bg-brand-navy-800 px-3 py-1 rounded-full border border-brand-gold-500/30">
                Corporate Overview
              </span>
              <h4 className="text-2xl font-bold text-white">
                Committed to Quality &amp; Long-Term Partnerships
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                As an agricultural exporter, our goal is to ensure that produce reaches global markets in prime condition. Every batch undergoes systematic inspection and temperature-appropriate logistics handling.
              </p>
              <div className="pt-4 border-t border-brand-navy-800 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">Trade Scope</span>
                  <span className="text-sm font-semibold text-brand-teal-300">Import &amp; Export</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">Sector</span>
                  <span className="text-sm font-semibold text-brand-gold-300">Agricultural Supply</span>
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
