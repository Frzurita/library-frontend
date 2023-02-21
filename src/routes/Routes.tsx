import BookList from '../views/BookList'
import BookForm from '../views/BookForm'

export const adminPanelRoutes = [
  {
    path: '/admin-panel/books',
    main: () => (
      <>
        <BookList />
      </>
    ),
  },
  {
    path: '/admin-panel/create/book',
    main: () => (
      <>
        <BookForm />
      </>
    ),
  },
  {
    path: '/admin-panel/update/book',
    main: () => (
      <>
        <BookForm />
      </>
    ),
  },
  {
    path: '/admin-panel',
    main: () => (
      <>
        <BookList />
      </>
    ),
  },
]
