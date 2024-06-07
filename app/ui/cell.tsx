import styles from './cell.module.scss'

export default function Cell({ day }: { day: string }) {

  const dateObj = new Date()
  const isToday = String(dateObj.getDate()) === day;
  
  return <span className={`${styles.cell} ${isToday && styles.today}`}>{day}</span>
}


