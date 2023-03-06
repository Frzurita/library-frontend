import { AxiosInstance } from 'axios'
import jwtDecode from 'jwt-decode'
import { Auth } from '../../types/auth'
import { Credentials, JWTPayload } from '../../types/credentials'
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

  async signup(auth: Auth): Promise<string> {
    const response = await this.httpService.post<
      Auth,
      ResponseBody<Credentials>
    >('auth/signup', auth)

    const payload: JWTPayload = this.handleUserResponse(response.data)

    return payload.id
  }

  async signin(auth: Auth): Promise<string> {
    const response = await this.httpService.post<
      Auth,
      ResponseBody<Credentials>
    >('auth/signin', auth)

    const payload: JWTPayload = this.handleUserResponse(response.data)

    const credentials: { id: string } = jwtDecode(response.data.accessToken)
    console.log(credentials)

    return credentials.id
  }

  logout(): void {
    this.cacheRepository.removeItem(CREDENTIALS_KEY)
    setToken(null)
  }

  private handleUserResponse(credentials: Credentials): JWTPayload {
    this.cacheRepository.setItem(CREDENTIALS_KEY, credentials.accessToken)
    setToken(credentials.accessToken)

    const payload: JWTPayload = jwtDecode(credentials.accessToken)

    return payload
  }
}

export default new AuthRepositoryHTTP(httpService, localStorageRepository)
