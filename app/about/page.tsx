import Calendar from '@/app/ui/calendar'
import Sidebar from '@/app/ui/sidebar'
import Summary from '@/app/ui/summary'
import styles from './page.module.scss'
import Link from 'next/link'
import { GoGoal } from "react-icons/go";
import { TbNotesOff } from "react-icons/tb";
import { ImTablet } from "react-icons/im";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiGraspingClaws } from "react-icons/gi";


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
            <GiGraspingClaws className='inline dark:text-rose-500 text-rose-800 text-2xl' /> This app exists to help you point out some achevements or occasions in
            your life
          </p>
          <p className={styles.pghp}>
            <GoGoal className='inline dark:text-amber-300 text-amber-600 text-2xl' /> The main goal is you can analize your day, week, month etc.
          </p>
          <div className={styles.pghp}>
            <div className='inline-flex gap-2 items-center p-0.5 border rounded border-zinc-600'><TbNotesOff className='inline dark:text-rose-300 text-rose-600 text-2xl' /> <ImTablet className='inline dark:text-emerald-300 text-emerald-500 text-xl' /></div> It is a good alternative or additive for your paper{' '}
            <span className={styles.emphasize}>booknote</span>
          </div>
          <p className={styles.pghp}>
            <BsGraphUpArrow className='inline dark:text-purple-300 text-purple-600 text-2xl' /> When creating an event you can choose{' '}
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
