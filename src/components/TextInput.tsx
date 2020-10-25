import React from 'react'
import TextField from '@material-ui/core/TextField'

interface TextInputProps {
  label: string
  multiline: boolean
  rows: number
  value: string
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({
  label,
  multiline,
  rows,
  value,
  type,
  onChange,
}: TextInputProps) => {
  return (
    <TextField
      fullWidth
      label={label}
      margin="dense"
      multiline={multiline}
      onChange={onChange}
      rows={rows}
      type={type}
      value={value}
    />
  )
}

export default TextInput
