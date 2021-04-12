import React from 'react'

const Task = ({currentTask}) => {
  return (
    <div>
      <h3>{currentTask.text}</h3>
    </div>
  )
}

export default Task
