import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'
import cacheRepository from '../../../services/cache'
import { CREDENTIALS_KEY } from '../../../services/cache/keys'
import { setToken } from '../../../services/api/httpService'
import { Auth } from '../../../types/auth'
import authRepositoryHttp from '../../../services/auth-repository/auth.repository.http'

const useAuth = () => {
  const [isAuth, setIsAuth] = useRecoilState<boolean>(
    atom({
      key: 'isAuth',
      default: false,
    })
  )

  useEffect(() => {
    const accessToken = cacheRepository.getItem(CREDENTIALS_KEY)
    if (!!accessToken) {
      setIsAuth(true)
    }
  }, [])

  const signup = async (auth: Auth): Promise<string> => {
    const id = await authRepositoryHttp.signup(auth)
    setIsAuth(true)

    return id
  }

  const signin = async (auth: Auth): Promise<string> => {
    const id = await authRepositoryHttp.signin(auth)
    setIsAuth(true)
    return id
  }

  const logout = () => {
    authRepositoryHttp.logout()
    setIsAuth(false)
  }

  return { isAuth, signup, signin, logout }
}

export default useAuth
