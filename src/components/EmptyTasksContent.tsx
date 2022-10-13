import clicBoardImg from '../assets/Clipboard.svg'
import styles from './EmptyTasksContente.module.css'

export function EmptyTasksContent () {
    return (
        <div className={styles.noTasksContent}>
            <img src={clicBoardImg} alt="Clipboard Image" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}