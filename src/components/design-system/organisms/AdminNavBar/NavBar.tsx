import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './nav-bar.module.css'
import useLanguage from '../../../../state/i18n/i18nHooks'
import useAuth from '../../../../state/auth/hooks/auth.hook'
import history from '../../../../helpers/history'
import useBooks from '../../../../state/books/hooks/books.hook'

export default function NavBar() {
  const { logout } = useAuth()
  const { emptyBookList } = useBooks()
  const doLogout = () => {
    emptyBookList()
    logout()
    globalThis.analytics.track('Logout', {
      title: 'logout',
      finishTimestamp: Date.now(),
    })
    history.push('/')
  }
  const { updateLanguage } = useLanguage()

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar__container']}>
        <div className={styles['logo-box']}>
          <span>
            <Typography
              className={styles.logo}
              variant="h6"
              onClick={() => history.push('/')}
            >
              Library
            </Typography>
          </span>
        </div>
        <div className={styles['login-box']}>
          <span className={styles.translate}>
            <Button color="inherit" onClick={() => updateLanguage('es')}>
              es
            </Button>
            <p> | </p>
            <Button color="inherit" onClick={() => updateLanguage('en')}>
              en
            </Button>
            <Button
              style={{ minWidth: '8rem' }}
              color="inherit"
              onClick={doLogout}
            >
              Logout
            </Button>
          </span>
        </div>
      </div>
    </nav>
  )
}
