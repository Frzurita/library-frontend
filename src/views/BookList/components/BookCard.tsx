// Common components
import Item from '../../../components/design-system/atoms/Item'
import styles from './book-card.module.css'

// Material UI
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import history from '../../../helpers/history'

import { Book } from '../../../types/book'
import { Stack } from '@mui/material'

const BookCard = ({
  book,
  deleteBook,
}: {
  book: Book
  deleteBook: Function
}) => {
  const { name } = book

  return (
    <div className={styles['book-card']}>
      <Item elevation={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<UpdateIcon />}
                    onClick={() => {
                      history.push({
                        pathname: `/admin-panel/update/book`,
                        state: { book: book },
                      })
                    }}
                  >
                    Update
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Item>
    </div>
  )
}

export default BookCard
