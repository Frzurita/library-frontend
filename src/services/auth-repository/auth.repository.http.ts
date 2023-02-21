import { AxiosInstance } from 'axios'
import { Auth } from '../../types/auth'
import { Book } from '../../types/book'
import { Credentials } from '../../types/credentials'
import {
  httpService,
  Response,
  ResponseBody,
  setToken,
} from '../api/httpService'
import localStorageRepository, { CacheRepository } from '../cache'
import { CREDENTIALS_KEY } from '../cache/keys'
import { AuthRepository } from './auth.repository'

export class AuthRepositoryHTTP implements AuthRepository {
  constructor(
    private httpService: AxiosInstance,
    private cacheRepository: CacheRepository
  ) { }

  async signup(auth: Auth): Response<Credentials> {
    const response = await this.httpService.post<
      Auth,
      ResponseBody<Credentials>
    >('auth/signup', auth)

    this.handleUserResponse(response.data)

    return response
  }

  async signin(auth: Auth): Response<Credentials> {
    const response = await this.httpService.post<
      Auth,
      ResponseBody<Credentials>
    >('auth/signin', auth)

    this.handleUserResponse(response.data)

    return response
  }

  logout(): void {
    this.cacheRepository.removeItem(CREDENTIALS_KEY)
    setToken(null)
  }

  private handleUserResponse(credentials: Credentials): void {
    this.cacheRepository.setItem(CREDENTIALS_KEY, credentials.accessToken)
    setToken(credentials.accessToken)
  }
}

export default new AuthRepositoryHTTP(httpService, localStorageRepository)
