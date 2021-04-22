import React from 'react'

    let toDoList = [
        {
            id: 1,
            toDoItem: "Get groceries",
            dueDate: "daily",
            complete: false
        },
        {
            id: 2,
            toDoItem: "Do laundry",
            dueDate: "daily",
            complete: false
        },
        {
            id: 3,
            toDoItem: "Practice React",
            dueDate: "daily",
            complete: false
        }
    ]

    return (
        <>
           <h1>To Do List</h1>
           {toDoList.map((task) => {
               return (
              <h3>{task.toDoItem}</h3>
               )
           })}
        </>
    )
}

export default ToDoList
