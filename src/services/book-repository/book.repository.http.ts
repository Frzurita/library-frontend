import { AxiosInstance } from 'axios'
import { Book } from '../../types/book'
import { httpService, Response, ResponseBody } from '../api/httpService'
import { BookRepository } from './book.repository'

export class BookRepositoryHTTP implements BookRepository {
  constructor(private httpService: AxiosInstance) { }

  getAll(): Response<Book[]> {
    return this.httpService.get<undefined, ResponseBody<Book[]>>('book')
  }

  remove(id: string): Response<void> {
    return this.httpService.delete<Book, ResponseBody<void>>(`book/${id}`)
  }

  create(book: Partial<Book>): Response<void> {
    return this.httpService.post<Partial<Book>, ResponseBody<void>>(
      `book`,
      book
    )
  }

  update(book: Partial<Book>): Response<void> {
    return this.httpService.put<Book, ResponseBody<void>>(`book`, book)
  }
}

export default new BookRepositoryHTTP(httpService)
