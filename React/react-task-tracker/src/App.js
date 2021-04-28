import Header from './component/Header'
import Tasks from './component/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './component/AddTask'
// Use state is a hook

function App() {
  let [showForm, setShowForm] = useState(false);
  let [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
     const tasksFromServer = await fetchTasks();
     setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data;
  }


  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(task)
    })

    console.log(res.json)
    const data = await res.json()
    console.log(data);
    setTasks([...tasks, data]);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, 
    { method: 'DELETE'})

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id 
      ? { ...task, reminder: !task.reminder}
      : task ))
  }

  return (
    <div className="container">
      
      <Header 
        title="To Do List" 
        onAdd={()=> setShowForm(!showForm)}
        showForm={showForm}
      />
      { showForm && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        /> : 
        'no task to show' 
      }
    </div>
  );
}

export default App;
