import { Inter } from "next/font/google"
const inter = Inter({
  subsets: ['latin'],
})
import styles from './sidebar.module.scss'

export default function Sidebar(){
  return (
    <nav>
      <ul className={`${inter.className} ${styles.ul}`}>
        <li className={styles.li}><img className={styles.icon} src="/menu.svg" /><span>Menu</span></li>
        <li className={styles.li}><img className={styles.icon} src="/pen.svg" /><span>Creative</span></li>
        <li className={styles.li}><img className={styles.icon} src="/profile.svg" /><span>Profile</span></li>
        <li className={styles.li}><img className={styles.icon} src="/about.svg" /><span>About</span></li>
      </ul>
    </nav>
  )
}
