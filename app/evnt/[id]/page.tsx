import Link from "next/link";
import Sidebar from "@/app/ui/sidebar";
import styles from './page.module.scss'

export default function Page({ searchParams }: { searchParams: { id: string } }) {
  return (
    <>
      <h2 className={styles.logotype}><Link className="logo-link" href='/'>Eventer</Link></h2>
      <div className={styles.container}>
        <div className={styles.sidebarBox}>
          <Sidebar />
        </div>
        <div className={styles.contentBox}>
          <h1 className={styles.title}>I have ridden a bike</h1>
          <p className={styles.content}>Today through the forest I have reached a place called ‘Березка’. It is a dacha area where people can spend time in a cute house surrounded by nature and wonderful singing of birds </p>
          <div className={styles.timeBox}>
            <p className={styles.date}>Created at <span className={styles.clock}>17 of April 2024 18:29</span></p>
            <p className={styles.date}>Last update at <span className={styles.clock}>19 of April 2024 13:29</span></p>
          </div>
          <div>
            <div className={styles.tagsBox}>
              <span className={styles.tagsLabel}>tags: </span>
              <ul className={styles.tags}>
                <li className={styles.liTag}>health</li>
                <li className={styles.liTag}>sport</li>
                <li className={styles.liTag}>walking</li>
              </ul>
            </div>
            <div>
              <span className={styles.importanceLabel}>importance: </span>
              <span className={styles.importanceValue}>crucial</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
