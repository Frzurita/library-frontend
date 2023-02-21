import * as React from 'react'

// Material UI
import AddIcon from '@mui/icons-material/Add'
import FixedBottomRightButton from '../atoms/FixedBottomRightButton'

export default function FloatingAddItem({ goTo }: { goTo: any }) {
  return (
    <FixedBottomRightButton goTo={goTo}>
      <AddIcon />
    </FixedBottomRightButton>
  )
}
