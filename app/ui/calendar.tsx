import Cell from '@/app/ui/cell'
import styles from './calendar.module.scss'
import {
  getFormattedDate,
  monthsWord,
  daysInMonths,
  getDaysInThisMonth,
} from '@/app/lib/utils'

export default function Calendar() {
  const dateObj = new Date()
  const date = getFormattedDate(dateObj)
  const dateNumber = dateObj.getDate()
  const daysNumber = getDaysInThisMonth()
  const days = Array.from({ length: daysNumber }, (_, i) => i + 1)

  return (
    <div className={styles.box}>
      <div className={styles.dateBox}>
        <span className={styles.date}>{date}</span>
        <div className={styles.arrowBox}>
          <img
            className={styles.arrow}
            src="/left-arrow.svg"
            alt="left arrow"
          />
          <img
            className={styles.arrow}
            src="/right-arrow.svg"
            alt="right arrow"
          />
        </div>
      </div>
      {/* days box */}
      <div className={styles.daysBox}>
        {days.map((cell) => (
          <Cell key={cell} day={String(cell)} />
        ))}
      </div>
    </div>
  )
}
