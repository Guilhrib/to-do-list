import { EmptyTasksContent } from './EmptyTasksContent'
import { Task, TaskCard } from './TaskCard'
import styles from './Tasks.module.css'

interface TasksProps {
    taskList: Task[],
    deleteTask: (id: number) => void,
    checkTasks: (id: number) => void
}

export function Tasks({ taskList, checkTasks, deleteTask }: TasksProps) {
    return (
        <main className={styles.tasks}>
            <div className={styles.tasksHeader}>
                <div className={styles.tasksHeaderCreated}>
                    <p>Tarefas criadas</p>
                    <span>{taskList.length}</span>
                </div>
                <div className={styles.tasksHeaderDone}>
                    <p>Concluídas</p>
                    <span>
                        {
                            taskList.length === 0
                            ? '0'
                            : `${taskList.reduce((acum, task) => {
                                if (task.status) return ++acum
                                return acum
                            }, 0)} de ${taskList.length}`
                        }
                    </span>
                </div>
            </div>
            <div className={styles.tasksContente}>
                {taskList.length === 0
                    ? <EmptyTasksContent />
                    : taskList.map(task => {
                        return (
                            <TaskCard
                                key={task.id}
                                task={task}
                                checkTasks={checkTasks}
                                deleteTasks={deleteTask}
                            />
                        )
                    })}
            </div>
        </main>
    )
}