import './App.css';
import Header from './component/Header'
import ToDoList from './component/ToDoList'
import { useState } from 'react'

function App() {
  const [toDoList, setToDoList] = useState(
    [
      {
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
    </div>
  );
}

export default App;

// props
// jsx -> html in our JS
// components
// destructuring


// state

