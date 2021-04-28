<<<<<<< HEAD
import "./App.css"
import ToDoList from "./component/ToDoList"
import Header from "./component/Header"
import React, {useState} from 'react'
=======
import './App.css';
import Header from './component/Header'
import ToDoList from './component/ToDoList'
import { useState } from 'react'
>>>>>>> main

function App() {
  const [toDoList, setToDoList] = useState(
    [
      {
<<<<<<< HEAD
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
  ])

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
      {/* <Form /> */}
=======
        id: 1,
        toDoItem: "Make Breakfast",
        dueDate: "4/17/21",
        complete: false
      },
      {
        id: 2,
        toDoItem: "Study for 3 hours",
        dueDate: "daily",
        complete: false
      },
      {
        id: 3,
        toDoItem: "Go to the gym",
        dueDate: "daily",
        complete: false
      },
    ]
  )
  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList}/>
>>>>>>> main
    </div>
  );
}

export default App;
