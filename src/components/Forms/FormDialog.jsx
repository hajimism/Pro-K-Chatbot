import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextInput from './TextInput'

class FormDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      description: '',
    }

    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputDescription = this.inputDescription.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  validateEmailFormat = (email) => {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regexp.test(email)
  }

  submitForm = () => {
    const { name, email, description } = this.state
    const isValidEmail = this.validateEmailFormat(email)

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
        this.setState({
          name: '',
          email: '',
          description: '',
        })
        return this.props.handleClose()
      })
    }
  }

  inputName(event) {
    this.setState({ name: event.target.value })
  }

  inputEmail(event) {
    this.setState({ email: event.target.value })
  }

  inputDescription(event) {
    this.setState({ description: event.target.value })
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
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
            onChange={this.inputName}
            rows={1}
            type="text"
            value={this.state.name}
          />
          <TextInput
            label="メールアドレス（必須）"
            multiline={false}
            onChange={this.inputEmail}
            rows={1}
            type="email"
            value={this.state.email}
          />
          <TextInput
            label="お問い合わせ内容(必須)"
            multiline
            onChange={this.inputDescription}
            rows={3}
            type="text"
            value={this.state.description}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="default" autoFocus>
            キャンセル
          </Button>
          <Button onClick={this.submitForm} color="primary" autoFocus>
            送信
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default FormDialog
