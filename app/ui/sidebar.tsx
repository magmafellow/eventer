'use client'

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
})
import styles from './sidebar.module.scss'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={`${inter.className} ${styles.ul}`}>
        <li className={`${styles.li} ${pathname === '/' && styles.liActive}`}>
          <Link className={styles.link} href="/">
            <img className={styles.icon} src="/menu.svg" />
            <span>Menu</span>
          </Link>
        </li>
        <li
          className={`${styles.li} ${
            pathname === '/creative' && styles.liActive
          }`}
        >
          <Link className={styles.link} href="/creative">
            <img className={styles.icon} src="/pen.svg" />
            <span>Creative</span>
          </Link>
        </li>
        <li
          className={`${styles.li} ${
            pathname === '/profile' && styles.liActive
          }`}
        >
          <Link className={styles.link} href="/profile">
            <img className={styles.icon} src="/profile.svg" />
            <span>Profile</span>
          </Link>
        </li>
        <li
          className={`${styles.li} ${pathname === '/about' && styles.liActive}`}
        >
          <Link className={styles.link} href="/about">
            <img className={styles.icon} src="/about.svg" />
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
