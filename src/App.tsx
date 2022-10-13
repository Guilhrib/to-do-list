import { useState } from 'react'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import { Task } from './components/TaskCard'

import styles from './App.module.css'
import './global.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask (newTasks: Task): void {
    setTasks([...tasks, newTasks])
  }

  function checkTask (id: number): void {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          id: task.id,
          content: task.content,
          status: !task.status
        }
      } else {
        return task
      }
    })
    setTasks(newTasks)
  }

  function deleteTask (id: number): void {
    const tasksWithoutsDeletedOne = tasks.filter(task => task.id !== id)
    setTasks(tasksWithoutsDeletedOne)
  }

  return (
    <div className={styles.app}>
      <Header />
      <NewTask addTask={addTask} />
      <Tasks
        taskList={tasks}
        checkTasks={checkTask}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
