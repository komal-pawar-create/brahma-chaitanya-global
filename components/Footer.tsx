import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                  BRAHMA CHAITANYA
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-brand-teal-400 tracking-wider">
                    GLOBAL
                  </span>
                  <span className="text-xs text-brand-gold-400 font-medium">
                    IMPORT | EXPORT
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Agricultural products supplier and international exporter, committed to reliability, consistent grading, and global trade standards.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-navy-800 text-brand-gold-400 border border-brand-gold-500/30">
                <Globe className="w-3.5 h-3.5" />
                Global Agricultural Export
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-brand-navy-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  Products Catalog
                </Link>
              </li>
              <li>
                <Link href="/packaging" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  Packaging Showcase
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  Quality &amp; Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  Contact &amp; Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Products List */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-brand-navy-800 pb-2">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {products.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="hover:text-brand-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500/80"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-brand-navy-800 pb-2">
              Export Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase text-slate-400 block font-semibold">Address</span>
                  <span className="text-slate-300 text-xs font-mono bg-brand-navy-800 px-2 py-0.5 rounded border border-brand-navy-700 inline-block mt-0.5">
                    [COMPANY ADDRESS]
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase text-slate-400 block font-semibold">Telephone</span>
                  <span className="text-slate-300 text-xs font-mono bg-brand-navy-800 px-2 py-0.5 rounded border border-brand-navy-700 inline-block mt-0.5">
                    [PHONE NUMBER]
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase text-slate-400 block font-semibold">Email</span>
                  <span className="text-slate-300 text-xs font-mono bg-brand-navy-800 px-2 py-0.5 rounded border border-brand-navy-700 inline-block mt-0.5">
                    [EMAIL ADDRESS]
                  </span>
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
            &copy; {currentYear} <span className="text-slate-200 font-semibold">Brahma Chaitanya Global</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-brand-gold-400 font-semibold tracking-wider">IMPORT | EXPORT</span>
            <span>•</span>
            <span>Product Showcase Website</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
