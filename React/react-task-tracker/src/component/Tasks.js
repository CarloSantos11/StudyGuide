import React from 'react'
import Task from './Task'

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => <Task currentTask={task}></Task>)}
    </>
  )
}

export default Tasks