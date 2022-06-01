import styles from './RegistrationData.module.scss'

export default function RegistrationData() {
  return (
    <div className={styles.container}>
      <h1>Pagamento</h1>
      <div className={styles.boxData}>
        <ul>
          <li>****.****.****.1234</li>
          <li>José da Silva</li>
          <li>05/2019</li>
        </ul>
      </div>
    </div>
  )
}