import * as React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import prok from '../assets/img/pro-k.png'
import questioner from '../assets/img/no-profile.png'

export interface ChatProps {
  text: string
  type: 'answer' | 'question'
}

const Chat = ({ text, type }: ChatProps) => {
  const isQuestion = type === 'question'
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'
  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="Pro-K" src={prok} />
        ) : (
          <Avatar alt="新入生" src={questioner} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{text}</div>
    </ListItem>
  )
}

export default Chat
