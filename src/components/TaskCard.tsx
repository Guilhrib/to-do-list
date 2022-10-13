import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import styles from './TaskCard.module.css'

export interface Task {
    id: number,
    status: boolean,
    content: string
}

interface TaskCardProps {
    task: Task,
    deleteTasks: (id: number) => void
    checkTasks: (id: number) => void
}

export function TaskCard({ task, deleteTasks, checkTasks }: TaskCardProps) {
    const [done, setDone] = useState(task.status)

    function handleCheckTask (): void {
        setDone(!done)
        checkTasks(task.id)
    }

    function handleDeleteTasks (): void {
        deleteTasks(task.id)
    }

    return (
        <div className={styles.card}>
            <input
                type="checkbox"
                checked={done}
                onChange={handleCheckTask}
            />
            <div
                className={done ? styles.checkedTask : styles.unCheckedTask}
            >
                {task.content}
            </div>
            <button onClick={handleDeleteTasks}>
                <Trash size={20}/>
            </button>
        </div>
    )
}