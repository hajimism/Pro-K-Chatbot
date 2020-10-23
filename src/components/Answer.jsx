import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       },
//     },
//   }));

const Answer = ({ content, select, nextId }) => {
  // const classes = useStyles();

  return (
    <div>
      <Button variant="contained" onClick={() => select(content, nextId)}>
        {content}
      </Button>
    </div>
  )
}

export default Answer
