'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, SUPPORTED_LANGUAGES } from '@/types/language';
import { translations, TranslationContent } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const applyLanguageAttributes = (lang: Language) => {
    document.documentElement.lang = lang;
    const opt = SUPPORTED_LANGUAGES.find((o) => o.code === lang);
    document.documentElement.dir = opt?.dir || (lang === 'ar' ? 'rtl' : 'ltr');
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem('bcg_language') as Language;
      const valid = SUPPORTED_LANGUAGES.some((l) => l.code === stored);
      if (stored && valid) {
        setLanguageState(stored);
        applyLanguageAttributes(stored);
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('bcg_language', lang);
      applyLanguageAttributes(lang);
    } catch {
      // ignore
    }
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
