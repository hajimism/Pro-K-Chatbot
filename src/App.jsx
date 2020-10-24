import React, { useCallback, useEffect, useState } from 'react'
import './assets/styles/style.css'
import { AnswersList, Chats } from './components/index'
import { FormDialog } from './components/Forms/index'
import { db } from './firebase/index'

const App = () => {
  const [answers, setAnswers] = useState([])
  const [chats, setChats] = useState([])
  const [currentId, setCurrentId] = useState('init')
  const [dataset, setDataset] = useState({})
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: 'question',
    })

    setAnswers(nextDataset.answers)
    setCurrentId(nextQuestionId)
  }

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case /^https:*/.test(nextQuestionId):
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

  const addChats = (chat) => {
    setChats((prevChats) => [...prevChats, chat])
  }

  useEffect(() => {
    ;(async () => {
      const initDataset = {}
      await db
        .collection('questions')
        .get()
        .then((snapShots) => {
          snapShots.forEach((doc) => {
            const { id } = doc
            const data = doc.data()
            initDataset[id] = data
          })
        })

      setDataset(initDataset)
      displayNextQuestion(currentId, initDataset[currentId])
    })()
  }, [])

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  })

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  )
}

export default App
