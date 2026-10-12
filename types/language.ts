export type Language = 'en' | 'hi' | 'mr' | 'ar' | 'ms' | 'vi' | 'ne' | 'si';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  country: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    country: 'United Kingdom – ब्रिटन',
    flag: '🇬🇧',
    dir: 'ltr',
  },
  {
    code: 'hi',
    label: 'Hindi',
    nativeLabel: 'हिन्दी (Hindi)',
    country: 'India – भारत',
    flag: '🇮🇳',
    dir: 'ltr',
  },
  {
    code: 'mr',
    label: 'Marathi',
    nativeLabel: 'मराठी (Marathi)',
    country: 'India – महाराष्ट्र',
    flag: '🇮🇳',
    dir: 'ltr',
  },
  {
    code: 'ar',
    label: 'Arabic',
    nativeLabel: 'العربية (Arabic)',
    country: 'UAE, Oman, Saudi Arabia, Qatar',
    flag: '🇦🇪',
    dir: 'rtl',
  },
  {
    code: 'ms',
    label: 'Malay',
    nativeLabel: 'Bahasa Melayu',
    country: 'Malaysia – मलेशिया',
    flag: '🇲🇾',
    dir: 'ltr',
  },
  {
    code: 'vi',
    label: 'Vietnamese',
    nativeLabel: 'Tiếng Việt (Vietnamese)',
    country: 'Vietnam – व्हिएतनाम',
    flag: '🇻🇳',
    dir: 'ltr',
  },
  {
    code: 'ne',
    label: 'Nepali',
    nativeLabel: 'नेपाली (Nepali)',
    country: 'Nepal – नेपाळ',
    flag: '🇳🇵',
    dir: 'ltr',
  },
  {
    code: 'si',
    label: 'Sinhala',
    nativeLabel: 'සිංහල (Sinhala)',
    country: 'Sri Lanka – श्रीलंका',
    flag: '🇱🇰',
    dir: 'ltr',
  },
];
