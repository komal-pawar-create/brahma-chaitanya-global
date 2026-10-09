import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { ShieldCheck, CheckCircle2, Search, Thermometer, Layers } from 'lucide-react';

export default function QualityPage() {
  const qualityPillars = [
    {
      icon: Search,
      title: 'Stringent Sorting & Grading',
      description:
        'Produce is sorted by length, color uniformity, and defect tolerance to meet export grade specifications.',
    },
    {
      icon: Thermometer,
      title: 'Temperature & Post-Harvest Control',
      description:
        'Immediate post-harvest cooling and controlled temperature chain preservation to maximize transit life.',
    },
    {
      icon: Layers,
      title: 'Uniform Batch Sizing',
      description:
        'Strict adherence to size classification (such as 5-7cm, 7-9cm, 9-12cm for chillies) ensuring buyers receive consistent lots.',
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Export Handling',
      description:
        'Handling and carton packaging conducted under clean conditions compliant with destination phytosanitary regulations.',
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Commitment to Quality"
          title="Quality Assurance &amp; Export Standards"
          description="Maintaining rigorous quality control and careful grading protocols to deliver reliable agricultural goods worldwide."
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
              Export Consistency
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Inspection Workflow
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              From farm procurement through sorting, size classification, carton packing, and container loading, each batch is tracked and verified against the buyer’s proforma specification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">Source Verification</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">Grade &amp; Size Check</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">Pre-Dispatch Inspection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title="Require Specific Quality or Phytosanitary Standards?"
          description="Contact our export desk with your destination requirements and regulatory compliance needs."
        />
      </div>
    </div>
  );
}
