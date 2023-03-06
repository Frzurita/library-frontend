import { Auth } from '../../types/auth'

export interface AuthRepository {
  signup(auth: Auth): Promise<string>
  signin(auth: Auth): Promise<string>
  logout(): void
}
