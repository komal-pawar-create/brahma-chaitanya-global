'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowRight, Phone, Mail, MessageCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    router.push(href);
  };

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.products, href: '/products' },
    { label: t.nav.packaging, href: '/packaging' },
    { label: t.nav.quality, href: '/quality' },
    { label: t.nav.contact, href: '/contact' },
  ];

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top micro-bar for export/corporate identity + Quick Language Switcher & Contact */}
      <div className="bg-brand-navy-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-brand-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-gold-400 flex-shrink-0"></span>
            <span className="font-medium tracking-wider text-slate-200 truncate">
              {t.nav.brandName} {t.nav.brandTag}
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-brand-gold-400 font-semibold tracking-widest text-[11px] uppercase whitespace-nowrap">
              {t.nav.importExport}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+919850153181"
              className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-brand-gold-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-gold-400" />
              <span>+91 9850153181</span>
            </a>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href="mailto:brahmachaitanyag@gmail.com"
              className="hidden xl:flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-brand-gold-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-brand-gold-400" />
              <span>brahmachaitanyag@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
          >
            <div className="relative w-10 h-10 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src="/images/logo/logo.png"
                alt="Brahma Chaitanya Global Logo"
                fill
                sizes="(max-width: 640px) 40px, 64px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-xl font-extrabold tracking-tight text-brand-navy-900 group-hover:text-brand-teal-700 transition-colors truncate">
                {t.nav.brandName}
              </span>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="text-[11px] sm:text-sm font-bold tracking-widest text-brand-teal-600">
                  {t.nav.brandTag}
                </span>
                <span className="text-[10px] text-slate-400">•</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-gold-600 truncate">
                  {t.nav.importExport}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-navy-900 font-semibold bg-brand-navy-50/70 border-b-2 border-brand-teal-600'
                      : 'text-slate-700 hover:text-brand-navy-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Language Switcher, Enquire Now Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Language Switcher on larger screens */}
            <div className="hidden sm:flex items-center">
              <LanguageSwitcher variant="header" />
            </div>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-navy-900 hover:bg-brand-navy-800 text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide border border-brand-gold-500/40 hover:border-brand-gold-500 transition-all shadow-sm hover:shadow"
            >
              <span>{t.nav.enquireNow}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold-400" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={t.nav.toggleMenu}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-4">
            {/* Primary Navigation Links */}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleMobileNav(item.href)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-brand-navy-900 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-brand-navy-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-brand-gold-400' : 'text-slate-400'}`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Enquire Now Action Button */}
            <div>
              <button
                type="button"
                onClick={() => handleMobileNav('/contact')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-navy-950 to-brand-navy-900 text-white px-5 py-3.5 rounded-xl text-sm font-bold shadow-md border border-brand-gold-500/40"
              >
                <span>{t.nav.enquireNow}</span>
                <ArrowRight className="w-4 h-4 text-brand-gold-400" />
              </button>
            </div>

            {/* Quick 1-Tap Contact Strip for Buyers on Mobile */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://wa.me/919850153181?text=Hello%20Brahma%20Chaitanya%20Global%2C%20I%20am%20interested%20in%20agricultural%20export%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919850153181"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-teal-700" />
                <span>Call Export</span>
              </a>
            </div>

            {/* Language Switcher Section (Clean & Collapsible at bottom) */}
            <div className="pt-2 border-t border-slate-100">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
