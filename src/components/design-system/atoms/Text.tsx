// Material UI
import Typography from '@mui/material/Typography'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export default function Text({
  variant,
  component,
  text,
  noWrap = false,
}: {
  variant: Variant
  component: Variant
  text: string
  noWrap?: boolean
}) {
  return (
    <Typography variant={variant} component={component} noWrap={noWrap}>
      {text}
    </Typography>
  )
}
