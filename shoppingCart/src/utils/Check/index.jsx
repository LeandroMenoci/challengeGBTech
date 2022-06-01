import styles from './Check.module.scss'
import CheckIcon from '../../assets/checkmark-circle.svg'

export default function Check() {
  return (
    <div className={styles.container}>
      <ion-icon name="checkmark-circle-outline"></ion-icon>
      <h2>Compra efetuada com sucesso</h2>
    </div>
  )
}