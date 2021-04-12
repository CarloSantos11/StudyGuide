import React from 'react'

const tasks = [
  {
    id: 1,
    text: "Take over the world",
    day: 'Tuesday @ 2:00',
    reminder: true
  },
  {
    id: 2,
    text: "Master React",
    day: 'Thursday @ 4:00',
    reminder: true
  },
  {
    id: 3,
    text: "Create Oppurtunites",
    day: 'Thursday @ 4:00',
    reminder: true
  }

]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => <h3>{task.text}</h3>)}
    </>
  )
}

export default Tasks