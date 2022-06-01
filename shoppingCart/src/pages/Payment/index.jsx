import styles from './Payment.module.scss'
import Total from '../../components/Total'
import Button from '../../components/Button'
import CardPay from '../../components/CardPay'
import { NavLink } from 'react-router-dom'


export default function Payment() {

  return (
    <div className={styles.container}>
      <CardPay />
      <Total />
      <NavLink to='/confirmacao'>
        <Button text='Finalizar o pedido' />
      </NavLink>
    </div>
  )
}