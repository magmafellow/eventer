import Calendar from '@/app/ui/calendar'
import Sidebar from '@/app/ui/sidebar'
import Summary from '@/app/ui/summary'
import styles from './page.module.scss'

export default function Page() {
  return (
    <>
      <h1 className={styles.logotype}>Eventer</h1>
      <div className={styles.container}>
        <div className={styles.sidebarBox}>
          <Sidebar />
        </div>
        <div className={styles.contentBox}>
          <Summary />
          <Calendar />
        </div>
      </div>
    </>
  )
}
