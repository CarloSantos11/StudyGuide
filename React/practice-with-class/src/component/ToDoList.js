<<<<<<< HEAD
import React, {useState} from 'react'
import ToDoItem from './ToDoItem'


const ToDoList = ({toDoList}) => toDoList.map((task) => <ToDoItem taskItem={task}/>)

// function ToDoList({toDoList}) {

//     return (
//         <>
//            {toDoList.map((task) => {
//                return (
//             <>
//               <h3>{task.toDoItem}</h3>
//               <h3>{task.dueDate}</h3>
//             </>
//                )
//            })}
//         </>
//     )
// }

=======
import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({toDoList}) => toDoList.map((task) => <ToDoItem taskItem={task}/>)

>>>>>>> main
export default ToDoList
