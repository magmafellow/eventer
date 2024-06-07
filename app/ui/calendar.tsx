import Cell from '@/app/ui/cell'
import styles from './calendar.module.scss'

export default function Calendar() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

  return (
    <div className={styles.box}>
      <div className={styles.dateBox}>
        <span className={styles.date}>17 of April 2024</span>
        <div className={styles.arrowBox}>
          <img className={styles.arrow} src="/left-arrow.svg" alt="left arrow" />
          <img className={styles.arrow} src="/right-arrow.svg" alt="right arrow" />
        </div>
      </div>
      {/* days box */}
      <div className={styles.daysBox}>
        {arr.map((cell) => (
          <Cell key={cell} day={String(cell)} />
        ))}
      </div>
    </div>
  )
}
