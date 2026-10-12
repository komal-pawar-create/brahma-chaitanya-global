'use client';

import React from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function EnquiryButton() {
  const { t } = useLanguage();

  return (
    <>
      {/* Desktop Floating Side CTA Tab */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-gradient-to-r from-brand-navy-900 to-brand-navy-800 text-brand-gold-400 hover:text-white px-4 py-3 rounded-l-xl shadow-2xl border-l-2 border-t-2 border-b-2 border-brand-gold-500/40 hover:border-brand-gold-500 transition-all duration-300 hover:translate-x-[-4px] group"
          aria-label={t.floating.enquireNow}
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-bold uppercase tracking-widest text-slate-100 group-hover:text-brand-gold-400 transition-colors">
            {t.floating.enquireNow}
          </span>
          <Send className="w-4 h-4 text-brand-gold-400 group-hover:translate-y-[-2px] transition-transform" />
        </Link>
      </div>

      {/* Mobile Floating Bottom Action Button */}
      <div className="lg:hidden fixed bottom-5 right-5 z-40">
        <Link
          href="/contact"
          className="flex items-center gap-2.5 bg-brand-navy-900 text-white px-5 py-3 rounded-full shadow-2xl border border-brand-gold-500/50 hover:bg-brand-navy-800 transition-all duration-200 active:scale-95"
          aria-label={t.floating.enquireNow}
        >
          <Send className="w-4 h-4 text-brand-gold-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-100">
            {t.floating.enquireNow}
          </span>
        </Link>
      </div>
    </>
  );
}
