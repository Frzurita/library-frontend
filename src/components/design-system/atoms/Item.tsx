import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2, 2),
  margin: theme.spacing(4, 4),
  color: theme.palette.text.secondary,
}))

export default Item
