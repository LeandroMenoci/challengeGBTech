import styles from './Payment.module.scss'
import Total from '../../components/Total'
import Button from '../../components/Button'
import Header from '../../components/Header'
import CardPay from '../../components/CardPay'

export default function Payment() {

  return (
    <div className={styles.container}>
      <Header />
      <CardPay />
      <Total />
      <Button text='Finalizar o pedido' />
    </div>
  )
}