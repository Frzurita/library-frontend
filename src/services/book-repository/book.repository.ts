import { Book } from '../../types/book'
import { Response } from '../api/httpService'

export interface BookRepository {
  getAll(): Response<Book[]>
  remove(id: string): Response<void>
  create(book: Partial<Book>): Response<void>
  update(book: Book): Response<void>
}
