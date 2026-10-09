import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { Package, Shield, Truck, CheckCircle2 } from 'lucide-react';

export default function PackagingPage() {
  const packagingSolutions = [
    {
      title: 'Corrugated Export Cartons',
      category: 'Fresh Vegetables & Produce',
      description: 'Heavy-duty 3-ply and 5-ply ventilated carton boxes specifically engineered to maintain freshness and withstand international transit handling.',
    },
    {
      title: 'Net / Mesh Bags',
      category: 'Bulk Vegetables (Onion & Potato)',
      description: 'Aerated mesh bags facilitating optimal air circulation for root vegetables across standard export shipments.',
    },
    {
      title: 'Vacuum Sealed & Food-Grade Pouches',
      category: 'Organic Dehydrated Powders',
      description: 'Moisture-barrier food-grade aluminium or multi-layer pouches preserving natural aroma, color, and nutritional profile.',
    },
    {
      title: 'Customized & Private Label Packing',
      category: 'Overseas Importers & Wholesalers',
      description: 'Custom packaging configurations, container palletization, and customer-specified labeling tailored to importing country norms.',
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Preservation & Logistics"
          title="Export Packaging Showcase"
          description="Engineered export packaging designed to ensure farm-fresh quality, hygiene, and transit durability from origin to destination port."
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
              Export Packing Protocol
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Our packing practices adhere to international freight expectations, ensuring adequate ventilation, humidity control, and standardized container palletization.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">Ventilation Optimized</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">Temperature Safeguards</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">Palletized Handling</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTASection
          title="Discuss Custom Packaging for Your Market"
          description="Contact our team to specify container packing, box dimensions, and branding requirements for your orders."
        />
      </div>
    </div>
  );
}
