import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import '../../index.css'
import classNames from 'classnames'

export default function Header() {
  const rotas = [
    {
      label: 'Sacola',
      to: '/'
    },
    {
      label: 'Pagamento',
      to: '/pagamento'
    },
    {
      label: 'Confirmação',
      to: '/confirmacao'
    }
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.lista}>
          {
            rotas.map((rota, index) => (
              <li key={index} className={styles.link} >
                <NavLink to={rota.to}>
                  {rota.label}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}


