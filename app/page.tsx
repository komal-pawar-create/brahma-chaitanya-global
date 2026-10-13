'use client';

import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import CTASection from '@/components/CTASection';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import {
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Award,
  Leaf,
  Thermometer,
  PackageCheck,
  Ship,
  Plane,
  Clock,
  ArrowRight,
  MapPin,
  Tractor,
  Layers,
  FileCheck,
  Building2,
  Anchor
} from 'lucide-react';

const trustHighlights = [
  { icon: Award, title: 'APEDA Registered', desc: 'Govt. of India Certified Exporter' },
  { icon: Leaf, title: 'Phytosanitary Compliant', desc: 'Strict Destination Country Standards' },
  { icon: Thermometer, title: 'Cold-Chain Logistics', desc: 'Temperature-Monitored Transit' },
  { icon: Tractor, title: 'Direct Farm Sourcing', desc: 'Nashik & Sangamner Agri Belt' },
];

const exportStrengths = [
  {
    icon: Tractor,
    title: 'Farm-Direct Origin',
    desc: 'Procured directly from verified growers in Maharashtra’s premier agricultural belt (Nashik & Sangamner), ensuring maximum harvest freshness.',
    accent: 'border-l-4 border-brand-teal-500',
    iconBg: 'bg-brand-teal-50 text-brand-teal-600 border-brand-teal-100',
  },
  {
    icon: Layers,
    title: 'Precision Caliber Grading',
    desc: 'Stringent mechanical and manual sorting according to millimeter size brackets, uniform color, and export-grade purity specifications.',
    accent: 'border-l-4 border-amber-400',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    icon: Thermometer,
    title: 'Controlled Reefer Transit',
    desc: 'Pre-cooling and continuous temperature control from packhouse to container stuffing, preserving firmness and shelf life.',
    accent: 'border-l-4 border-emerald-500',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    icon: FileCheck,
    title: 'Complete Export Documentation',
    desc: 'Transparent compliance including Phytosanitary Certificates, Certificate of Origin, APEDA inspection reports, and custom clearance.',
    accent: 'border-l-4 border-brand-navy-600',
    iconBg: 'bg-brand-navy-50 text-brand-navy-700 border-brand-navy-100',
  },
];

const globalDestinations = [
  { flag: '🇦🇪', country: 'United Arab Emirates', port: 'Jebel Ali Port, Dubai', mode: 'Sea Reefer & Air Cargo', transit: '3-4 Days' },
  { flag: '🇸🇬', country: 'Singapore', port: 'Port of Singapore', mode: 'Sea Reefer Containers', transit: '6-8 Days' },
  { flag: '🇲🇾', country: 'Malaysia', port: 'Port Klang', mode: 'Commercial Bulk Sea', transit: '7-9 Days' },
  { flag: '🇴🇲', country: 'Oman', port: 'Port of Sohar', mode: 'Sea Reefer & Air Cargo', transit: '4-5 Days' },
  { flag: '🇶🇦', country: 'Qatar', port: 'Hamad Port, Doha', mode: 'Controlled Reefer', transit: '4-5 Days' },
  { flag: '🇪🇺', country: 'Europe & UK', port: 'Rotterdam / London', mode: 'Air Cargo & Reefer', transit: 'Scheduled Transit' },
];

const tradeProcess = [
  {
    step: '01',
    title: 'Inquiry & Proforma Terms',
    desc: 'Share required product caliber, volume (FCL/LCL), and discharge port for CIF/FOB pricing.',
  },
  {
    step: '02',
    title: 'Farm Harvest & Quality Audit',
    desc: 'Selected batches are harvested and graded against buyer specifications and phytosanitary standards.',
  },
  {
    step: '03',
    title: 'Custom Export Packing',
    desc: 'Packed in high-strength ventilated corrugated cartons or mesh bags with pre-cooling protocols.',
  },
  {
    step: '04',
    title: 'Port Stuffing & Dispatch',
    desc: 'Vessel loading at JNPT Port (Nhava Sheva) or Air Cargo with full export documentation clearance.',
  },
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust & Accreditations Strip */}
      <div className="bg-white border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {trustHighlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 text-brand-navy-900 shadow-2xs">
                  <Icon className="w-5 h-5 text-brand-gold-500" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-navy-900 leading-tight">{title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.home.portfolioSubtitle}
          title={t.home.portfolioTitle}
          description={t.home.portfolioDesc}
        />

        <ProductGrid products={products} />

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg group"
          >
            <span>Explore All Export Products</span>
            <ArrowRight className="w-4 h-4 text-brand-gold-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Why Global Importers Choose Brahma Chaitanya Global */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 inline-block mb-3 shadow-2xs">
              Trade Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-900 tracking-tight">
              Why Overseas Importers Partner With Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              We eliminate supply chain inconsistencies by combining source-level farm relationships with strict international export packaging and phytosanitary compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportStrengths.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between ${item.accent}`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-brand-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Trade Routes & Supply Destinations */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold-600">
              International Ports
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-900 mt-2 tracking-tight">
              Supplying Major Global Discharge Hubs
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Consignments depart from Mumbai Sea Port (JNPT Nhava Sheva) and Mumbai Air Cargo (BOM), arriving directly to key wholesale import terminals across Asia, Middle East, and Europe.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal-700 hover:text-brand-teal-800 transition-colors group flex-shrink-0"
          >
            <span>Request Port Transit Schedule</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {globalDestinations.map((dest) => (
            <div
              key={dest.country}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-teal-400/50 transition-all flex items-start gap-4"
            >
              <div className="text-3xl p-2 bg-slate-50 rounded-xl border border-slate-100 flex-shrink-0">
                {dest.flag}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-brand-navy-900 truncate">
                    {dest.country}
                  </h4>
                  <span className="text-[10px] font-bold text-brand-gold-600 uppercase tracking-wider bg-brand-gold-500/10 px-2 py-0.5 rounded">
                    {dest.transit}
                  </span>
                </div>
                <p className="text-xs text-brand-teal-700 font-semibold mt-1 flex items-center gap-1.5">
                  <Anchor className="w-3 h-3 text-brand-teal-600 flex-shrink-0" />
                  <span className="truncate">{dest.port}</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-1">{dest.mode}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 4-Step Export Workflow */}
      <section className="py-16 sm:py-20 bg-brand-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold-400 bg-brand-navy-800 px-3.5 py-1.5 rounded-full border border-brand-gold-500/30 inline-block mb-3">
              Standard Operating Procedure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Farm Inquiry to Vessel Loading
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Every shipment follows a transparent, documented quality pipeline to ensure commercial buyers receive consistent caliber and grade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradeProcess.map((item, idx) => (
              <div
                key={item.step}
                className="bg-brand-navy-800/80 rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden group hover:bg-brand-navy-800 transition-colors"
              >
                <div className="text-4xl font-black text-brand-gold-400/40 mb-3 font-mono">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-brand-gold-500/20"
            >
              <span>Initiate Export Inquiry</span>
              <ArrowRight className="w-4 h-4 text-brand-navy-950" />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Call To Action */}
      <CTASection />
    </div>
  );
}
