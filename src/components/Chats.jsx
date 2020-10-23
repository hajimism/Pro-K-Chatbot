import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { Chat } from './index'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
}))

const Chats = ({ chats }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {chats.map((chat, index) => (
        <Chat text={chat.text} type={chat.type} key={index.toString()} />
      ))}
    </List>
  )
}

export default Chats
