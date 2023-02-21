import axios from 'axios'
import { config } from '../../helpers/config'
import history from '../../helpers/history'
import useAuth from '../../state/auth/hooks/auth.hook'
import cacheRepository from '../cache'
import { CREDENTIALS_KEY } from '../cache/keys'

export type ResponseBody<T> = {
  data: T
}

export type Response<T> = Promise<ResponseBody<T>>


const instance = axios.create({
  baseURL: `${config.api.base_url}/`,
  headers: {
    'Content-type': 'application/json',
  },
})

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    switch (error.response.status) {
      case 401:
        history.push('/login')
        break
      case 404:
      case 403:
        history.push('/')
        break
    }
    return Promise.reject(error.response)
  }
)

const accessToken = cacheRepository.getItem(CREDENTIALS_KEY)
if (!!accessToken) {
  setToken(accessToken)
}

export function setToken(token: string | null) {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete instance.defaults.headers.common['Authorization']
  }
}

export const httpService = instance
