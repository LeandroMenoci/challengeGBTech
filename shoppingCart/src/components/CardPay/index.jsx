import styles from './CardPay.module.scss'

export default function CardPay() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cartão de crédito</h1>
      <div className={styles.boxBag}>
        <form className={styles.form}>
          <label className={styles.label}>Número do cartão:</label>
          <input
            type="number"
            className={styles.numberCard}
            placeholder='____.____.____.____' />

          <label className={styles.label}>Nome do Titular:</label>
          <input type="text" className={styles.cardholder} placeholder='Como no cartão' />

          <label className={styles.label}>Validade (mês/ano):</label>
          <label className={styles.labelCVV}>CVV:</label>

          <input type="number" className={styles.validity} placeholder='__/____' />
          <input type="number" className={styles.securityCode} placeholder='____' />
        </form>
      </div>
    </div >
  )
}