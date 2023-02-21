import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Common components
import Item from '../../components/design-system/atoms/Item'
import SummitButton from '../../components/design-system/molecules/SummitButton'
import RequiredTextField from '../../components/design-system/molecules/RequiredTextField'

// Material UI
import Stack from '@mui/material/Stack'
import { useLocation } from 'react-router-dom'
import SectionTitle from '../../components/design-system/molecules/SectionTitle/SectionTitle'
import useBookList from '../../state/books/hooks/books.hook'
import history from '../../helpers/history'
import { Book } from '../../types/book'
import { FormError } from '../../types/error'
import ErrorList from '../../components/design-system/organisms/ErrorList/ErrorList'

export default function BookForm() {
  const [book, setBook] = useState<Book>({
    id: uuidv4(),
    name: '',
  })
  const [errors, setErrors] = useState<FormError | null>()
  const location = useLocation()
  const isUpdate = location.state?.book
  const { addBook, updateBook } = useBookList()

  useEffect(() => {
    if (isUpdate) setBook(location.state.book)
  }, [location])

  const onSubmit = async () => {
    try {
      if (isUpdate) {
        await updateBook(book)
      } else await addBook(book)

      history.push('/admin-panel/books')
    } catch (error: any) {
      if (error.data?.statusCode) {
        const messageType = typeof error.data.message
        const message = error.data.message
        setErrors({
          [`${error.data.error}:`]:
            messageType === 'string' ? [message] : message,
        })
      }
    }
  }

  return (
    <>
      <SectionTitle text="Book Form" />
      <Item elevation={3}>
        <Stack direction="column" spacing={2}>
          <RequiredTextField
            id="name"
            label="Name"
            variant="standard"
            value={book.name}
            onChange={event => setBook({ ...book, name: event.target.value })}
          />
          {errors && <ErrorList errors={errors} />}
          <SummitButton
            label={isUpdate ? 'Update' : 'Save'}
            onSubmit={onSubmit}
          />
        </Stack>
      </Item>
    </>
  )
}
