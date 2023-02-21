// Material UI
import Stack from '@mui/material/Stack'
import { ReactNode } from 'react'

export default function ItemList({
  children,
  spacing,
}: {
  children: ReactNode
  spacing: number
}) {
  return <Stack spacing={spacing}>{children}</Stack>
}
