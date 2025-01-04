import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Translation files
import en from './locales/en.json';
import uk from './locales/uk.json';

i18n
    .use(LanguageDetector) // Detect user's language
    .use(initReactI18next) // Bind i18next to React
    .init({
        resources: {
            en: {
                translation: en, // English translations
            },
            uk: {
                translation: uk, // Ukrainian translations
            },
        },
        fallbackLng: 'en', // Default language
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
