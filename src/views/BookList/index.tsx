// Material UI
import FloatingAddItem from '../../components/design-system/molecules/FloatingAddItem'
import SectionList from '../../components/design-system/molecules/SectionList'
import SectionTitle from '../../components/design-system/molecules/SectionTitle/SectionTitle'
import history from '../../helpers/history'
import styles from './index.module.css'

import BookCard from './components/BookCard'
import useBooks from '../../state/books/hooks/books.hook'
import NavBar from '../../components/design-system/organisms/AdminNavBar/NavBar'
import currentLanguage from '../../state/i18n/i18nHooks'

const BookList = () => {
  const { bookList, deleteBook } = useBooks()
  const { t } = currentLanguage()
  const route = '/admin-panel/create/book'
  const goTo = () => {
    history.push(route)
  }

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.container__box}>
          <SectionTitle text={t('book-list.title')} />
          <SectionList>
            {bookList.map(book => (
              <BookCard key={book.id} book={book} deleteBook={deleteBook} />
            ))}
          </SectionList>
          <FloatingAddItem goTo={goTo} />
        </div>
      </div>
    </>
  )
}

export default BookList
