import styles from './summary.module.scss'

export default function Summary() {
  
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.label}>Total days: </span>
        <span className={styles.value}>17</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Important events: </span>
        <span className={styles.value}>20</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Total events: </span>
        <span className={styles.value}>198</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Crucial events: </span>
        <span className={styles.value}>3</span>
      </li>
    </ul>
  )
}
