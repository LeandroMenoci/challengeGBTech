import styles from './Button.module.scss'

export default function Button({ text }) {
  return (
    <div>
      <button type='button' className={styles.button}>{text}</button>
    </div>
  )
}