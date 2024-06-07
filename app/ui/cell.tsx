import styles from './cell.module.scss'

export default function Cell({ day }: { day: string }) {
  return <span className={styles.cell}>{day}</span>
}
