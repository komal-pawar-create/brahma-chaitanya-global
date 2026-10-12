'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, Globe, ArrowRight, Shield } from 'lucide-react';
import { products, getLocalizedProduct } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const { language, t } = useLanguage();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-brand-navy-900 text-slate-300 border-t border-brand-navy-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 bg-white/10 p-1.5 rounded-xl border border-white/10">
                <Image
                  src="/images/logo/logo.png"
                  alt="Brahma Chaitanya Global Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {t.nav.brandName}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-brand-teal-400 tracking-wider">
                    {t.nav.brandTag}
                  </span>
                  <span className="text-xs text-brand-gold-400 font-medium uppercase">
                    {t.nav.importExport}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-navy-800 text-brand-gold-400 border border-brand-gold-500/30">
                <Globe className="w-3.5 h-3.5" />
                {t.footer.globalExportBadge}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-brand-navy-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="/packaging" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  {t.nav.packaging}
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  {t.nav.quality}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products List */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-brand-navy-800 pb-2">
              {t.footer.productsHeading}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {products.map((item) => {
                const localized = getLocalizedProduct(item, language);
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/products/${item.slug}`}
                      className="hover:text-brand-teal-300 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500/80"></span>
                      {localized.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-brand-navy-800 pb-2">
              {t.footer.contactHeading}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase text-slate-400 block font-semibold">
                    {t.footer.addressLabel}
                  </span>
                  <span className="text-slate-200 text-xs font-medium inline-block mt-0.5">
                    Sangamner, Maharashtra, India
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase text-slate-400 block font-semibold">
                    {t.footer.telephoneLabel}
                  </span>
                  <a
                    href="tel:+919850153181"
                    className="text-slate-200 hover:text-brand-gold-400 text-xs font-semibold inline-block mt-0.5 transition-colors"
                  >
                    +91 9850153181
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase text-slate-400 block font-semibold">
                    {t.footer.emailLabel}
                  </span>
                  <a
                    href="mailto:brahmachaitanyag@gmail.com"
                    className="text-slate-200 hover:text-brand-gold-400 text-xs font-semibold inline-block mt-0.5 transition-colors break-all"
                  >
                    brahmachaitanyag@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-brand-navy-800/80 bg-brand-navy-950/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear}{' '}
            <span className="text-slate-200 font-semibold">{t.footer.copyright}</span>. {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-brand-gold-400 font-semibold tracking-wider uppercase">{t.nav.importExport}</span>
            <span>•</span>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-brand-gold-400 transition-colors"
              title="Export Inquiries Admin Portal"
            >
              <Shield className="w-3.5 h-3.5 text-brand-gold-400" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
