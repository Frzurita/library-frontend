import InputTextField, { Props } from '../atoms/InputTextField'

export default function RequiredTextField({
  id,
  label,
  type,
  defaultValue,
  variant,
  value,
  onChange,
}: Omit<Props, 'required'>) {
  return (
    <InputTextField
      id={id}
      label={label}
      type={type}
      defaultValue={defaultValue}
      variant={variant}
      required={true}
      value={value}
      onChange={onChange}
    />
  )
}
