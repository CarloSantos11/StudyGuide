import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({toDoList}) => toDoList.map((task) => <ToDoItem taskItem={task}/>)

export default ToDoList
