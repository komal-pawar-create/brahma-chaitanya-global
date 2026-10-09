import React from 'react';
import Link from 'next/link';
import { ArrowRight, Send, Globe } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = 'Looking to Source Agricultural Products for Global Export?',
  description = 'Connect with Brahma Chaitanya Global to discuss export specifications, packaging options, and bulk shipment logistics tailored to your international market.',
}: CTASectionProps) {
  return (
    <section className="bg-brand-navy-900 py-16 sm:py-20 text-white relative overflow-hidden border-t border-brand-navy-800">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-teal-950 opacity-80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-800 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-gold-500/30">
          <Globe className="w-3.5 h-3.5" />
          <span>International Trade &amp; Supply</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold max-w-3xl mx-auto tracking-tight leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-navy-950 font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-brand-gold-500/20"
          >
            <span>Enquire Now</span>
            <Send className="w-4 h-4 text-brand-navy-950" />
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-navy-800 hover:bg-brand-navy-700 text-white font-semibold text-sm transition-all duration-200 border border-slate-700"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 text-brand-teal-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
