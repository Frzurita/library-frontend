import { Auth } from '../../types/auth'
import { Credentials } from '../../types/credentials'
import { Response } from '../api/httpService'

export interface AuthRepository {
  signup(auth: Auth): Response<Credentials>
  signin(auth: Auth): Response<Credentials>
  logout(): void
}
