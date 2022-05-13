import { useEffect, useState } from "react"
import styles from './Total.module.scss'


export default function Total() {
  const [totalProduct, setTotalProduct] = useState({ subTotal: '', shippingTotal: '', discount: '', total: '' })

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(res => res.json())
      .then(data => {
        setTotalProduct({
          subTotal: data.subTotal.toFixed(2).replace(".", ","),
          shippingTotal: data.shippingTotal.toFixed(2).replace(".", ","),
          discount: data.discount.toFixed(2).replace(".", ","),
          total: data.total.toFixed(2).replace(".", ",")
        })
      })
  })

  return (
    <>
      <div className={styles.boxTotal}>
        <ul className={styles.description}>
          <li className={styles.produtos}>Produtos</li>
          <li className={styles.subTotal}>{totalProduct.subTotal}</li>
        </ul>
        <ul className={styles.description}>
          <li className={styles.frete}>Frete</li>
          <li className={styles.shippingTotal}>{totalProduct.shippingTotal}</li>
        </ul>
        <ul className={styles.description}>
          <li className={styles.desconto}>Desconto</li>
          <li className={styles.discount}>{totalProduct.discount}</li>
        </ul>
        <ul className={styles.description}>
          <li className={styles.total}>Total</li>
          <li className={styles.totalProduct}>{totalProduct.total}</li>
        </ul>
      </div>
    </>
  )
}