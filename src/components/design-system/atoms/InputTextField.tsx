import TextField from '@mui/material/TextField'
import { ChangeEvent, ChangeEventHandler } from 'react'

type Variant = 'standard' | 'filled' | 'outlined' | undefined

export type Props = {
  required: boolean
  id: string
  type?: 'text' | 'password'
  label: string
  defaultValue?: string
  variant: Variant
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export default function InputTextField({ ...props }: Props) {
  return (
    <TextField
      required={props.required}
      id={props.id}
      label={props.label}
      type={props.type}
      defaultValue={props.defaultValue}
      variant={props.variant}
      value={props.value}
      onChange={props.onChange}
    />
  )
}
