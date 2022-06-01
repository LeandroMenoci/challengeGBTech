import Total from '../../components/Total'
import Product from '../../components/Product'
import Button from '../../components/Button'
import styles from './ShoppingCart.module.scss'
import { NavLink } from 'react-router-dom'

export default function ShoppingCart() {

  return (
    <div className={styles.container}>
      <Product />
      <Total />
      <NavLink to='/pagamento'>
        <Button text='Seguir para o pagamento' />
      </NavLink>
    </div>
  )
}

