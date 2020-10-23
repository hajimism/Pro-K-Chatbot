import React from 'react'
import { Answer } from './index'

const AnswersList = ({ answers, select }) => {
  return (
    <div className="c-grid__answer">
      {answers.map(({ content, nextId }, index) => (
        <Answer
          content={content}
          select={select}
          nextId={nextId}
          key={index.toString()}
        />
      ))}
    </div>
  )
}

export default AnswersList
