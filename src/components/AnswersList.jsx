import React from 'react'
import { Answer } from './index'

const AnswersList = ({ answers, select }) => {
  return (
    <div
      className="c-grid__answer"
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'flex-end',
        height: '192px',
      }}
    >
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
