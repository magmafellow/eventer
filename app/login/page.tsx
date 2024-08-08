import Link from 'next/link'
import styles from './page.module.scss'
import Sidebar from '@/app/ui/sidebar'
import Summary from '@/app/ui/summary'
import Calendar from '@/app/ui/calendar'

export default function Page() {
    return ( <>
    <h2 className={styles.logotype}><Link className="logo-link" href='/'>Eventer</Link></h2>
    <div className={styles.container}>
      <div className={styles.sidebarBox}>
        <Sidebar />
      </div>
      <div className={styles.contentBox}>
        
      </div>
    </div>
  </>)
}
