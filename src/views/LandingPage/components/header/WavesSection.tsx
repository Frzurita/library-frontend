import styles from './header.module.css'
import { LogoIcon } from './waves-logo'
import { Waves } from '../waves/waves'
import currentLanguage from '../../../../state/i18n/i18nHooks'

export default function WavesSection() {
  const { t } = currentLanguage()

  return (
    <>
      <div className={styles['header']}>
        <div className={styles['header-box']}>
          <LogoIcon />
          <h1 className={styles['header-tittle']}>{t('header-tittle')}</h1>
        </div>
        <div>
          <Waves />
        </div>
      </div>
      <div className={styles['footer']}>
        <p className={styles['footer-content']}>By.Readers | 2023</p>
      </div>
    </>
  )
}
