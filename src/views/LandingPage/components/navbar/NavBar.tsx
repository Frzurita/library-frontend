import history from '../../../../helpers/history'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './nav-bar.module.css'
import useLanguage from '../../../../state/i18n/i18nHooks'
import useAuth from '../../../../state/auth/hooks/auth.hook'

export default function NavBar() {
  const goToBooks = () => history.push('/admin-panel/books')
  const goToLogin = () => history.push('/login')
  const goToSignup = () => history.push('/signup')
  const { updateLanguage } = useLanguage()
  const { isAuth } = useAuth()

  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-box']}>
        <span>
          <Typography className={styles.logo} variant="h6">
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
            onClick={isAuth ? goToBooks : goToLogin}
          >
            {isAuth ? 'Books' : 'Login'}
          </Button>
          {!isAuth && (
            <Button
              style={{ minWidth: '8rem' }}
              color="inherit"
              onClick={goToSignup}
            >
              Signup
            </Button>
          )}
        </span>
      </div>
    </nav>
  )
}
