import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enT from './assets/locales/en/translation.json';
import deT from './assets/locales/de/translation.json';
import hrT from './assets/locales/hr/translation.json';

const resources = {
  en: {
    translation: enT,
  },
  de: {
    translation: deT,
  },
  hr: {
    translation: hrT,
  },
};

export const i18nInitOptions: InitOptions = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'de', 'hr'],
  load: 'languageOnly',
  saveMissing: false,
  debug: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: (value, format) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },
  resources,
};

i18n.use(initReactI18next).use(LanguageDetector).init(i18nInitOptions);

export default i18n;
