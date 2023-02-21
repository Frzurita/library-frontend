import { useEffect, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import bookRepositoryHttp from '../../../services/book-repository/book.repository.http'
import { Book } from '../../../types/book'

const useBooks = () => {
  const [bookList, setBookList] = useRecoilState<Book[]>(
    atom({
      key: 'bookList',
      default: [] as Book[],
    })
  )

  useEffect(() => {
    if (bookList.length === 0) {
      bookRepositoryHttp
        .getAll()
        .then(res => res.data)
        .then(data => setBookList(data))
    }
  }, [])

  const emptyBookList = () => {
    setBookList([])
  }

  const deleteBook = async (id: string) => {
    try {
      await bookRepositoryHttp.remove(id)
      setBookList(bookList.filter(book => book.id != id))
    } catch (error) {
      console.error(`deleteBook -> remove() ERROR: \n${error}`)
    }
  }

  const addBook = async (book: Book) => {
    await bookRepositoryHttp.create(book)
    setBookList([book, ...bookList])
  }

  const updateBook = async (book: Book) => {
    await bookRepositoryHttp.update(book)
    const list = bookList.filter(listBook => book.id != listBook.id)
    setBookList([book, ...list])
  }

  return { bookList, emptyBookList, deleteBook, addBook, updateBook }
}

export default useBooks
