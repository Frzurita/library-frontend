import { useTranslation } from 'react-i18next'
import './services/i18nService'

type AvailableLanguages = 'en' | 'es' | undefined

const useLanguage = () => {
  const { t, i18n } = useTranslation()

  const updateLanguage = newLanguage => {
    i18n.changeLanguage(newLanguage)
  }

  return { t, updateLanguage }
}

export default useLanguage
