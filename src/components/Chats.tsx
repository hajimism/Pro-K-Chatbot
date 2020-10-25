import * as React from 'react'
import List from '@material-ui/core/List'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Chat, { ChatProps } from './Chat'

interface ChatsProps {
  chats: ChatProps[]
}

const useStyles = makeStyles(() =>
  createStyles({
    chats: {
      height: '400px',
      padding: '0',
      overflow: 'auto',
    },
  })
)

const Chats = ({ chats }: ChatsProps) => {
  const classes = useStyles()

  return (
    <List className={classes.chats} id="scroll-area">
      {chats.map((chat: ChatProps, index: number) => (
        <Chat text={chat.text} type={chat.type} key={index.toString()} />
      ))}
    </List>
  )
}

export default Chats
