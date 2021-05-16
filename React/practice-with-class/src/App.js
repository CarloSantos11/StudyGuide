import "./App.css"
import ToDoList from "./component/ToDoList"
import Header from "./component/Header"
import React, {useState} from 'react'

function App() {
  const [toDoList, setToDoList] = useState(
    [
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
  ])

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
      {/* <Form /> */}
    </div>
  );
}

export default App;
