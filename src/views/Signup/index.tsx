import { useEffect, useState } from 'react'
import styles from './signup.module.css'

// Common components
import SummitButton from '../../components/design-system/molecules/SummitButton'
import RequiredTextField from '../../components/design-system/molecules/RequiredTextField'

// Material UI
import Stack from '@mui/material/Stack'
import { useLocation } from 'react-router-dom'
import SectionTitle from '../../components/design-system/molecules/SectionTitle/SectionTitle'
import useAuth from '../../state/auth/hooks/auth.hook'
import history from '../../helpers/history'
import { Auth } from '../../types/auth'
import ErrorList from '../../components/design-system/organisms/ErrorList/ErrorList'
import { FormError } from '../../types/error'

export default function Singup() {
  const [auth, setAuth] = useState<Auth>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<FormError | null>()
  const location = useLocation()
  const { isAuth, signup } = useAuth()

  useEffect(() => {
    if (isAuth) history.push('/admin-panel/books')
  }, [location])

  const onSubmit = async () => {
    try {
      await signup(auth)
      history.push('/admin-panel/books')
    } catch (error: any) {
      if (error.data?.statusCode) {
        const messageType = typeof error.data.message
        const message = error.data.message
        setErrors({
          [`${error.data.error}:`]:
            messageType === 'string' ? [message] : message,
        })
      }
    }
  }

  return (
    <div className={styles.container}>
      <SectionTitle text="Signup" />
      <div className={styles.form}>
        <Stack direction="column" spacing={3}>
          <RequiredTextField
            id="email"
            label="Email"
            variant="standard"
            value={auth.email}
            onChange={event => setAuth({ ...auth, email: event.target.value })}
          />
          <RequiredTextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            value={auth.password}
            onChange={event =>
              setAuth({ ...auth, password: event.target.value })
            }
          />
          {errors && <ErrorList errors={errors} />}
          <div className={styles.button}>
            <SummitButton onSubmit={onSubmit} label="Signup" />
          </div>
        </Stack>
      </div>
    </div>
  )
}
