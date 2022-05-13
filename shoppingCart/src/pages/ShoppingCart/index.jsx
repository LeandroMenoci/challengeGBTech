import Total from '../../components/Total'
import Produtos from '../../components/Produtos'
import Button from '../../components/Button'
import styles from './ShoppingCart.module.scss'
import Header from '../../components/Header'

export default function ShoppingCart() {

  return (
    <div className={styles.container}>
      <Header />
      <Produtos />
      <Total />
      <Button text='Seguir para o pagamento' />
    </div>
  )
}

