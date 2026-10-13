'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Language, SUPPORTED_LANGUAGES } from '@/types/language';
import { Globe, ChevronUp, Check, X } from 'lucide-react';

export default function FloatingLanguagePill() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const currentOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setModalOpen(false);
  };

  return (
    <aside
      ref={containerRef}
      aria-label="Export Market and Language Selector"
      className="fixed bottom-5 left-5 z-50 font-sans"
    >
      {/* Expanded Market Selection Popup */}
      {modalOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-brand-navy-950 text-white rounded-3xl p-4 shadow-2xl border-2 border-brand-gold-500/60 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-brand-navy-800 mb-3">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-teal-400" />
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-gold-400">
                  Select Export Market &amp; Language
                </h4>
                <p className="text-[10px] text-slate-400">
                  निर्यात देश आणि भाषा निवडा
                </p>
              </div>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-brand-navy-800 transition-colors"
              aria-label="Close language selector"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-all ${
                    isActive
                      ? 'bg-brand-gold-500 text-brand-navy-950 font-bold shadow-lg scale-[1.01]'
                      : 'bg-brand-navy-900/80 hover:bg-brand-navy-800 text-slate-200 border border-brand-navy-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl">{lang.flag}</span>
                    <div className="min-w-0">
                      <div className="font-extrabold text-xs tracking-wide">
                        {lang.nativeLabel}
                      </div>
                      <div
                        className={`text-[11px] truncate ${
                          isActive ? 'text-brand-navy-900 font-semibold' : 'text-slate-400'
                        }`}
                      >
                        {lang.country}
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <span className="w-5 h-5 rounded-full bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
        className="bg-brand-navy-900 hover:bg-brand-navy-800 text-white px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-brand-gold-500/70 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 group"
      >
        <span className="text-lg">{currentOption.flag}</span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-brand-gold-400 uppercase font-bold tracking-wider leading-none">
            Language / भाषा:
          </span>
          <span className="text-xs font-extrabold text-white leading-tight">
            {currentOption.nativeLabel}
          </span>
        </div>
        <ChevronUp
          className={`w-4 h-4 text-brand-gold-400 transition-transform ml-1 ${
            modalOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </aside>
  );
}
