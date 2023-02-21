import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

type Props = {
  label: string
  onSubmit: (...props: any) => void
}

export default function SummitButton({ label, onSubmit }: Props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={onSubmit} type="submit" variant="contained">
        {label}
      </Button>
    </Stack>
  )
}
