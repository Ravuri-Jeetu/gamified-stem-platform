import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translations
import enTranslation from './locales/en/translation.json';
import hiTranslation from './locales/hi/translation.json';

// Initialize i18next
i18n
  // Load translation using http -> see /public/locales
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Resources for fallback language
    resources: {
      en: {
        translation: enTranslation
      },
      hi: {
        translation: hiTranslation
      }
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    // Common namespaces across all the pages
    ns: ['translation'],
    defaultNS: 'translation',
    
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'navigator'],
      
      // Keys or params to lookup language from
      lookupLocalStorage: 'shikshaplay_language',
      
      // Cache user language on
      caches: ['localStorage'],
    },
    
    react: {
      useSuspense: true,
    },
  });

export default i18n;