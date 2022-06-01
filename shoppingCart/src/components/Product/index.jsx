import styles from './Product.module.scss'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (...params) => axios
  .get(...params)
  .then(resp => resp.data)

export default function Product() {
  const { data } = useSWR('http://www.mocky.io/v2/5b15c4923100004a006f3c07', fetcher)

  if (!data) {
    return <h1>Aguardando</h1>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Produtos</h1>
      <div className={styles.boxBag}>
        {/* {console.log(data.items[0].product.name)} */}
        <div className={styles.boxProduct}>
          <img className={styles.img} src={data.items[0].product.imageObjects[0].medium} alt="" />
          <p className={styles.name}>{data.items[0].product.name}</p>
          <p className={styles.price}>{`R$ ${data.items[0].product.priceSpecification.price.toFixed(2).replace(".", ",")}`}</p>
        </div>
        <div className={styles.boxProduct}>
          <img className={styles.img} src={data.items[1].product.imageObjects[0].medium} alt="" />
          <p className={styles.name}>{data.items[1].product.name}</p>
          <p className={styles.price}>{`R$ ${data.items[1].product.priceSpecification.price.toFixed(2).replace(".", ",")}`}</p>
        </div>
        <div className={styles.boxProduct}>
          <img className={styles.img} src={data.items[2].product.imageObjects[0].medium} alt="" />
          <p className={styles.name}>{data.items[2].product.name}</p>
          <p className={styles.price}>{`R$ ${data.items[2].product.priceSpecification.price.toFixed(2).replace(".", ",")}`}</p>
        </div>
      </div>
    </div >
  )
}



