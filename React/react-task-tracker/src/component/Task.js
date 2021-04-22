import React from 'react'
import { FaTimes} from 'react-icons/fa'

const Task = ({currentTask}) => {
  return (
    <div className="task">
      <h3>{currentTask.text}<FaTimes /></h3>
      <p>{currentTask.day}</p>
    </div>
  )
}

export default Task
