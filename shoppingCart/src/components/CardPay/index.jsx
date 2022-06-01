import styles from './CardPay.module.scss'
import Cards from 'react-credit-cards'
import { useState } from 'react'

export default function CardPay() {

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cartão de crédito</h1>
      <div className={styles.boxBag}>
        <form className={styles.form}>
          <label className={styles.label}>Número do cartão:</label>
          <input
            type="number"
            className={styles.numberCard}
            placeholder='____.____.____.____'
            onChange={(e) => setNumber(e.target.value)} />

          <label className={styles.label}>Nome do Titular:</label>
          <input type="text" className={styles.cardholder} placeholder='Como no cartão'
            onChange={(e) => setName(e.target.value)} />

          <label className={styles.label}>Validade (mês/ano):</label>
          <label className={styles.labelCVV}>CVV:</label>

          <input type="number" className={styles.validity} placeholder='__/____'
            onChange={(e) => setExpiry(e.target.value)} />
          <input type="number" className={styles.securityCode} placeholder='____'
            onChange={(e) => setCvc(e.target.value)} />
        </form>
      </div>
    </div >
  )
}