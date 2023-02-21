import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import global_en from '../../../translations/en/global.json'
import global_es from '../../../translations/es/global.json'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: global_en,
      es: global_es,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
