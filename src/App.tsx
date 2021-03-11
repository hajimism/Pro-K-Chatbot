import * as React from 'react'
import './assets/styles/style.css'
import AnswersList from './components/AnswersList'
import { AnswerProps } from './components/Answer'
import { ChatProps } from './components/Chat'
import Chats from './components/Chats'
import FormDialog from './components/FormDialog'
import { defaultDataset as db } from './dataset'
// import { Helmet } from 'react-helmet'

interface DataSet {
  answers: AnswerProps[]
  question: string
}

const App = () => {
  const [answers, setAnswers] = React.useState<AnswerProps[]>([])
  const [chats, setChats] = React.useState<ChatProps[]>([])
  const [currentId, setCurrentId] = React.useState<any>('init')
  // eslint-disable-next-line
  const [dataset, setDataset] = React.useState<any>(db)
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = React.useCallback(() => {
    setOpen(false)
  }, [])

  const displayNextQuestion = (nextQuestionId: any, nextDataset: DataSet) => {
    addChats({
      text: nextDataset.question,
      type: 'question',
    })

    setAnswers(nextDataset.answers)
    setCurrentId(nextQuestionId)
  }

  const selectAnswer = (selectedAnswer: string, nextQuestionId: any) => {
    switch (true) {
      case /^http*/.test(nextQuestionId):
        const a = document.createElement('a')
        a.href = nextQuestionId
        a.target = '_blank'
        a.click()
        break

      case nextQuestionId === 'contact':
        handleClickOpen()
        break

      default:
        addChats({
          text: selectedAnswer,
          type: 'answer',
        })

        setTimeout(
          () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
          600
        )
        break
    }
  }

  // chat cycle
  const addChats = React.useCallback(
    (chat: ChatProps) => {
      setChats((prevChats) => [...prevChats, chat])
    },
    [setChats]
  )

  // display init choices
  React.useEffect(() => {
    displayNextQuestion(currentId, dataset[currentId])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Auto scroll
  React.useEffect(() => {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  })

  return (
    <>
      {/* <Helmet>
        <meta property="og:image" content="./logo.png" />
        <meta name="twitter:creator" content="@prok_shinkan" />
        <meta name="twitter:title" content="Pro-K新歓チャットボット" />
        <meta
          name="twitter:description"
          content="Pro-K新歓チャットボットです！お気軽に質問してください！"
        />
        <meta name="twitter:image" content="" />
        <title>Pro-K新歓チャットボット</title>
      </Helmet> */}
      <section className="c-section">
        <div className="c-box">
          <Chats chats={chats} />
          <AnswersList answers={answers} select={selectAnswer} />
          <FormDialog open={open} handleClose={handleClose} />
        </div>
      </section>
    </>
  )
}

export default App
