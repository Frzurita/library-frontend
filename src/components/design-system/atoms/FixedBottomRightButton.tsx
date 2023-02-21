// Material UI
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { ReactNode } from 'react'

const CFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
}))

export default function FixedBottomRightButton({
  goTo,
  children,
}: {
  goTo: any
  children: ReactNode
}) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <CFab color="primary" aria-label="add" onClick={goTo}>
        {children}
      </CFab>
    </Box>
  )
}
