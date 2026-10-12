'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Language, SUPPORTED_LANGUAGES } from '@/types/language';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'header' | 'mobile' | 'topbar';
  className?: string;
}

export default function LanguageSwitcher({
  variant = 'header',
  className = '',
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div className={`pt-2 ${className}`}>
        <div className="flex items-center gap-2 mb-2.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <Globe className="w-4 h-4 text-brand-teal-600" />
          <span>Export Market &amp; Language / भाषा निवडा</span>
        </div>
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`py-2 px-2.5 rounded-xl text-left border flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-brand-navy-900 text-brand-gold-400 border-brand-gold-500 shadow-sm'
                    : 'bg-slate-50 text-slate-800 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold truncate leading-tight">
                    {lang.nativeLabel}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate leading-tight">
                    {lang.country}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === 'topbar') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-brand-navy-800/90 hover:bg-brand-navy-700 border border-brand-gold-500/40 text-slate-200 text-xs font-medium transition-all"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="text-xs">{currentOption.flag}</span>
          <span className="text-[11px] font-bold text-brand-gold-400">
            {currentOption.nativeLabel}
          </span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-1.5 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-brand-teal-600" />
              <span>Select Destination Market &amp; Language</span>
            </div>
            <div className="space-y-1 max-h-80 overflow-y-auto">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isActive = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors ${
                      isActive
                        ? 'bg-brand-navy-900 text-white font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base">{lang.flag}</span>
                      <div className="min-w-0">
                        <div className="font-bold text-xs truncate">
                          {lang.nativeLabel}
                        </div>
                        <div
                          className={`text-[10px] truncate ${
                            isActive ? 'text-brand-gold-400' : 'text-slate-400'
                          }`}
                        >
                          {lang.country}
                        </div>
                      </div>
                    </div>
                    {isActive && <Check className="w-4 h-4 text-brand-gold-400 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Header Dropdown Trigger
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/90 text-brand-navy-900 border border-slate-300 shadow-sm transition-all text-xs font-bold"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Change Destination Language"
      >
        <Globe className="w-4 h-4 text-brand-teal-600" />
        <span className="text-sm">{currentOption.flag}</span>
        <span className="font-bold text-slate-800">{currentOption.nativeLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-brand-teal-600" />
              <span>Export Markets &amp; Languages</span>
            </span>
            <span className="text-[10px] text-brand-gold-600 font-semibold lowercase">
              {SUPPORTED_LANGUAGES.length} regions
            </span>
          </div>

          <div className="space-y-1 max-h-84 overflow-y-auto pr-0.5">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-brand-navy-900 text-white font-semibold shadow-sm'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xl flex-shrink-0">{lang.flag}</span>
                    <div className="min-w-0">
                      <div className="font-extrabold text-xs tracking-wide">
                        {lang.nativeLabel}
                      </div>
                      <div
                        className={`text-[11px] truncate ${
                          isActive ? 'text-brand-gold-400 font-medium' : 'text-slate-500'
                        }`}
                      >
                        {lang.country}
                      </div>
                    </div>
                  </div>
                  {isActive && <Check className="w-4 h-4 text-brand-gold-400 flex-shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
