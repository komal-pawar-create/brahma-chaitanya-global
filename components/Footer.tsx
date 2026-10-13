'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  Shield,
  MessageCircle,
  Award,
  Leaf,
  PackageCheck,
  Ship,
  ChevronRight
} from 'lucide-react';
import { products, getLocalizedProduct } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const { language, t } = useLanguage();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  const exportCertifications = [
    { icon: Award, title: 'APEDA Registered', desc: 'Govt. of India Certified Exporter' },
    { icon: Leaf, title: 'Phytosanitary Compliant', desc: 'Strict Destination Country Standards' },
    { icon: PackageCheck, title: 'Export-Grade Packaging', desc: 'Ventilated & Temperature-Managed' },
    { icon: Ship, title: 'Global Port Dispatch', desc: 'Air Cargo & Reefer Sea Freight' },
  ];

  return (
    <footer className="bg-brand-navy-950 text-slate-300 border-t border-brand-navy-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-40 bg-brand-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-40 bg-brand-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Trust & Standards Strip */}
      <div className="border-b border-brand-navy-800/80 bg-brand-navy-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {exportCertifications.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-navy-800/90 border border-brand-gold-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Icon className="w-4 h-4 text-brand-gold-400" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white leading-tight">{title}</h5>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Info (Col 1: 4 spans) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 bg-white p-1 rounded-2xl border-2 border-brand-gold-400/50 shadow-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/logo/logo.png"
                  alt="Brahma Chaitanya Global Logo"
                  fill
                  sizes="56px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-wide">
                  {t.nav.brandName}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-bold text-brand-teal-400 tracking-wider">
                    {t.nav.brandTag}
                  </span>
                  <span className="text-[11px] text-brand-gold-400 font-bold uppercase tracking-wider bg-brand-gold-500/10 px-2 py-0.5 rounded-md border border-brand-gold-500/20">
                    {t.nav.importExport}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.description || 'International supplier and exporter of export-grade Indian agricultural produce, delivering uniform grading, hygienic post-harvest care, and global container logistics.'}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-navy-900 text-brand-gold-400 border border-brand-gold-500/30">
                <Globe className="w-3.5 h-3.5 text-brand-teal-400" />
                <span>Global Agricultural Trade</span>
              </span>
            </div>
          </div>

          {/* Quick Links (Col 2: 2 spans) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-400 mb-4 pb-2 border-b border-brand-navy-800">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { href: '/', label: t.nav.home },
                { href: '/about', label: t.nav.about },
                { href: '/products', label: t.nav.products },
                { href: '/packaging', label: t.nav.packaging },
                { href: '/quality', label: t.nav.quality },
                { href: '/contact', label: t.nav.contact },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-brand-gold-400 transition-colors flex items-center gap-1.5 group py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-gold-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Products (Col 3: 3 spans) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-400 mb-4 pb-2 border-b border-brand-navy-800">
              {t.footer.productsHeading}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {products.map((item) => {
                const localized = getLocalizedProduct(item, language);
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-slate-300 hover:text-brand-teal-300 transition-colors flex items-center gap-2 group py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500/80 group-hover:scale-125 transition-transform" />
                      <span className="truncate">{localized.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Export Desk & Contact (Col 4: 3 spans) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-400 mb-4 pb-2 border-b border-brand-navy-800">
              {t.footer.contactHeading}
            </h4>

            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">
                    {t.footer.addressLabel}
                  </span>
                  <span className="text-slate-200 text-xs font-medium inline-block mt-0.5">
                    Sangamner, Maharashtra, India
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">
                    {t.footer.telephoneLabel}
                  </span>
                  <a
                    href="tel:+919850153181"
                    className="text-slate-200 hover:text-brand-gold-400 text-xs font-bold inline-block mt-0.5 transition-colors"
                  >
                    +91 9850153181
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">
                    {t.footer.emailLabel}
                  </span>
                  <a
                    href="mailto:brahmachaitanyag@gmail.com"
                    className="text-slate-200 hover:text-brand-gold-400 text-xs font-medium inline-block mt-0.5 transition-colors break-all"
                  >
                    brahmachaitanyag@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/919850153181?text=Hello%20Brahma%20Chaitanya%20Global%2C%20I%20am%20interested%20in%20agricultural%20export%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/40 text-xs font-bold transition-all shadow-sm group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                <span>Chat on WhatsApp Export Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Ribbon */}
      <div className="border-t border-brand-navy-900 bg-[#040810] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            &copy; {currentYear}{' '}
            <span className="text-slate-200 font-bold">{t.footer.copyright}</span>. {t.footer.allRightsReserved}
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-brand-gold-400 font-bold tracking-wider uppercase">
              Registered Export Merchant
            </span>
            <span>•</span>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-brand-gold-400 transition-colors"
              title="Export Desk Admin Portal"
            >
              <Shield className="w-3.5 h-3.5 text-brand-gold-400" />
              <span>Admin Desk</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
