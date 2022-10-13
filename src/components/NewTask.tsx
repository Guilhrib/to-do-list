import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { Task } from './TaskCard'

import styles from './NewTask.module.css'

interface NewTaskPros {
    addTask: (newTask: Task) => void
}

export function NewTask({ addTask }: NewTaskPros) {
    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState(false)

    function handleNewTaskInput (event: ChangeEvent<HTMLInputElement>): void {
        if (event.target.value) setError(false)
        setNewTask(event.target.value)
    }

    function handleNewTasksClick (): void {
        if (newTask) {
            const id = Math.floor(Math.random() * 10000 + 1)

            addTask({
                id,
                status: false,
                content: newTask
            })
            setNewTask('')
        } else {
            setError(true)
        }
    }

    return (
        <div className={styles.newTask}>
            <input
                value={newTask}
                type="text"
                placeholder='Adicione uma nova tarefa'
                className={
                    error
                    ? styles.newTaskInputError 
                    : styles.newTaskInput
                }
                onChange={handleNewTaskInput}
            />
            <button
                className={styles.createButton}
                onClick={handleNewTasksClick}
            >
                Criar
                <PlusCircle size={22} />
            </button>
        </div>
    )
}