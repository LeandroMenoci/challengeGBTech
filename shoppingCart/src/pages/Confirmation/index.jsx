import styles from './Confirmation.module.scss'
import Total from '../../components/Total'
import FinalProduct from '../../components/FinalProduct'
import Check from '../../utils/Check'
import RegistrationData from '../../utils/RegistrationData'

export default function Confirmation() {
  return (
    <div className={styles.container}>
      <Check />
      <RegistrationData />
      <FinalProduct />
      <Total />
    </div>
  )
}