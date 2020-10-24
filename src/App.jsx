import React from 'react'
import './assets/styles/style.css'
import { AnswersList, Chats } from './components/index'
import { FormDialog } from './components/Forms/index'
import { db } from './firebase/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: {},
      open: false,
    }
    this.selectAnswer = this.selectAnswer.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  displayNextQuestion = (nextQuestionId) => {
    const { chats } = this.state

    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question',
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === 'init':
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500)
        break

      case /^https:*/.test(nextQuestionId):
        const a = document.createElement('a')
        a.href = nextQuestionId
        a.target = '_blank'
        a.click()
        break

      case nextQuestionId === 'contact':
        this.handleClickOpen()
        break

      default:
        const chat = {
          text: selectedAnswer,
          type: 'answer',
        }

        const { chats } = this.state
        chats.push(chat)
        this.setState({ chats: chats })

        setTimeout(() => this.displayNextQuestion(nextQuestionId), 800)
        break
    }
  }

  componentDidMount() {
    ;(async () => {
      const { dataset } = this.state
      await db
        .collection('questions')
        .get()
        .then((snapShots) => {
          snapShots.forEach((doc) => {
            const { id } = doc
            const data = doc.data()
            dataset[id] = data
          })
        })
      const initAnswer = ''
      this.selectAnswer(initAnswer, this.state.currentId)
    })()
  }

  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render() {
    const { answers, chats, open } = this.state

    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={chats} />
          <AnswersList answers={answers} select={this.selectAnswer} />
          <FormDialog open={open} handleClose={this.handleClose} />
        </div>
      </section>
    )
  }
}
export default App
