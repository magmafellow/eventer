import Calendar from '@/app/ui/calendar'
import Sidebar from '@/app/ui/sidebar'
import Summary from '@/app/ui/summary'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h2 className={styles.logotype}><Link className="logo-link" href='/'>Eventer</Link></h2>
      <div className={styles.container}>
        <div className={styles.sidebarBox}>
          <Sidebar />
        </div>
        <div className={styles.contentBox}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.pghp}>
            This app exists to help you point some achevements or occasions in
            your life good or not so
          </p>
          <p className={styles.pghp}>
            The main goal is you can analize your day, week, month etc.
          </p>
          <p className={styles.pghp}>
            It is a good alternative or additive for your paper{' '}
            <span className={styles.emphasize}>booknote</span>
          </p>
          <p className={styles.pghp}>
            When creating an event you can choose{' '}
            <span className={styles.emphasize}>importance</span> of that and
            attach some <span className={styles.emphasize}>tags</span> to a
            better structure and to make it easier to find events by some{' '}
            <em>criteria</em>.
          </p>
        </div>
      </div>
    </>
  )
}
