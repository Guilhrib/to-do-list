import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <img
                    src={rocketLogo}
                    alt="rocket logo"
                    className={styles.logo}
                />
                <div className={styles.todo}>
                    <p className={styles.to}>to</p>
                    <p className={styles.do}>do</p>
                </div>
            </div>
        </header>
    )
}