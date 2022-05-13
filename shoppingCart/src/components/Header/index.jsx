import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.lista}>
          <li className={styles.link}>Sacola</li>
          <li className={styles.link}>Pagamento</li>
          <li className={styles.link}>Confirmação</li>
        </ul>
      </nav>
    </header>
  )
}