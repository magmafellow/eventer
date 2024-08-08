import Calendar from '@/app/ui/calendar'
import Sidebar from '@/app/ui/sidebar'
import Summary from '@/app/ui/summary'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='dark:bg-[#0f0f0e]'>
      <h2 className={styles.logotype}><Link className="logo-link" href='/'>Eventer</Link></h2>
      <div className={styles.container}>
        <div className={styles.sidebarBox}>
          <Sidebar />
        </div>
        <div className={styles.contentBox}>
          <Summary />
          <Calendar />
        </div>
      </div>
    </div>
  )
}
