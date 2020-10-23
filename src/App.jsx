import React from 'react'
import defaltDataset from './dataset'
import './assets/styles/style.css'
import { AnswersList, Chats } from './components/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaltDataset,
      open: false,
    }
    this.selectAnswer = this.selectAnswer.bind(this)
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
        this.displayNextQuestion(nextQuestionId)
        break

      default:
        const chat = {
          text: selectedAnswer,
          type: 'answer',
        }

        const { chats } = this.state
        chats.push(chat)
        this.setState({ chats: chats })

        this.displayNextQuestion(nextQuestionId)
        break
    }
  }

  componentDidMount() {
    const initAnswer = ''
    this.selectAnswer(initAnswer, this.state.currentId)
  }

  render() {
    const { answers, chats } = this.state

    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={chats} />
          <AnswersList answers={answers} select={this.selectAnswer} />
        </div>
      </section>
    )
  }
}
export default App
