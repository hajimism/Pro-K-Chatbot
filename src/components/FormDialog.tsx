import * as React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextInput from './TextInput'
import WEBHOOKURL from '../webhook'

interface FormDialogProps {
  open: boolean
  handleClose: () => void
}

const FormDialog = ({ open, handleClose }: FormDialogProps) => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [description, setDescription] = React.useState('')

  const validateEmailFormat = (email: string) => {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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

      fetch(WEBHOOKURL, {
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

  const inputName = React.useCallback(
    (event) => {
      setName(event.target.value)
    },
    [setName]
  )

  const inputEmail = React.useCallback(
    (event) => {
      setEmail(event.target.value)
    },
    [setEmail]
  )

  const inputDescription = React.useCallback(
    (event) => {
      setDescription(event.target.value)
    },
    [setDescription]
  )

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
