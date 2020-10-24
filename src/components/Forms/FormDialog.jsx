import React, { useState, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextInput from './TextInput'

const FormDialog = ({ open, handleClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const validateEmailFormat = (email) => {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regexp.test(email)
  }

  const submitForm = () => {
    const isValidEmail = validateEmailFormat(email)

    const isBlank = name === '' || email === '' || description === ''

    if (isBlank) {
      alert('必須入力欄が空白です。')
      return false
    } else if (!isValidEmail) {
      alert('メールアドレスの書式が異なります。')
      return false
    } else {
      const payload = {
        text:
          ' @channel お問い合わせがありました\n' +
          'お名前: ' +
          name +
          '\n' +
          'メールアドレス: ' +
          email +
          '\n' +
          '【問い合わせ内容】\n' +
          description,
      }

      const url =
        'https://hooks.slack.com/services/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'

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(() => {
        alert('送信が完了しました。追ってご連絡いたします🙌')
        setName('')
        setEmail('')
        setDescription('')
        return handleClose()
      })
    }
  }

  const inputName = useCallback((event) => {
    setName(event.target.value)
  })

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  })

  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  })

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'製作者へのお問い合わせ'}
      </DialogTitle>
      <DialogContent>
        <TextInput
          label="お名前(必須)"
          multiline={false}
          onChange={inputName}
          rows={1}
          type="text"
          value={name}
        />
        <TextInput
          label="メールアドレス（必須）"
          multiline={false}
          onChange={inputEmail}
          rows={1}
          type="email"
          value={email}
        />
        <TextInput
          label="お問い合わせ内容(必須)"
          multiline
          onChange={inputDescription}
          rows={3}
          type="text"
          value={description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default" autoFocus>
          キャンセル
        </Button>
        <Button onClick={submitForm} color="primary" autoFocus>
          送信
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
