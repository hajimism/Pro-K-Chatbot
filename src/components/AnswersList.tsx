import * as React from 'react'
import Answer, { AnswerProps } from './Answer'

interface AnsweListProps {
  answers: AnswerProps[]
  select: any
}

const AnswersList = ({ answers, select }: AnsweListProps) => {
  return (
    <div
      className="c-grid__answer"
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'flex-end',
        height: '234px',
      }}
    >
      {answers.map(({ content, nextId }: AnswerProps, index: number) => (
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
