import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextInput = ({ label, multiline, rows, value, type, onChange }) => {
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
