'use client'

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
})
import styles from './sidebar.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IoSettingsSharp } from 'react-icons/io5'
import { BiSolidLogIn } from 'react-icons/bi'
import Modal, { modalTurnOn } from '@/app/ui/modal'
import ThemeSwitcher from '@/app/ui/theme-switcher'
import { CgProfile } from "react-icons/cg";
import { LuPencil } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { FaQuestion } from "react-icons/fa";
import { logout } from '../lib/actions'


export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav>
      <Modal id='menu_settings'>
        <h2 className='text-xl text-center mb-5 py-5 border-b border-b-slate-300 dark:border-b-slate-100'>Settings for App</h2>
        <div className='text-lg flex items-center gap-2 mb-2'>Current theme: <ThemeSwitcher /></div>
        <div className='mb-2'>
          <p className='text-lg'>You are not logged in</p>
        </div>
        <div className='mb-4'>
          <p className='text-lg'>You are logged in as <span className='dark:text-zinc-400 text-zinc-700 bg-zinc-100 dark:bg-zinc-800 py-0.5 px-2 rounded-md border border-slate-300 dark:border-slate-400'>mazda</span></p>
        </div>
        <div>
          <button className='text-indigo-600 bg-indigo-200 border-indigo-400 hover:bg-indigo-100 dark:text-indigo-300 border dark:hover:bg-indigo-950 dark:border-indigo-400 dark:bg-indigo-800 py-0.5 px-1 rounded'
          onClick={() => logout()}>log out</button>
        </div>
      </Modal>
      
      <ul className={`${inter.className} ${styles.ul}`}>
        <li className={`${styles.li} ${pathname === '/' && styles.liActive}`}>
          <Link className={`${styles.link} jump-trigger relative`} href="/">
            {/* <img className={styles.icon} src="/menu.svg" /> */}
            <CgMenuGridO className={`${styles.icon} text-2xl`} />
            <span>Menu</span>
            {/* <AnimateBallsOnClick id="balls-box-01" /> */}
          </Link>
        </li>
        <li
          className={`${styles.li} ${
            pathname === '/creative' && styles.liActive
          }`}
        >
          <Link className={`${styles.link} jump-trigger`} href="/creative">
            {/* <img className={styles.icon} src="/pen.svg" /> */}
            <LuPencil className={`${styles.icon} text-2xl`} />
            <span>Creative</span>
            {/* <AnimateBallsOnClick id="balls-box-01" /> */}
          </Link>
        </li>
        <li
          className={`${styles.li} ${
            pathname === '/profile' && styles.liActive
          }`}
        >
          <Link className={`${styles.link} jump-trigger`} href="/profile">
            {/* <img className={styles.icon} src="/profile.svg" /> */}
            <CgProfile className={`${styles.icon} text-2xl`} />
            <span>Profile</span>
            {/* <AnimateBallsOnClick id="balls-box-01" /> */}
          </Link>
        </li>
        <li
          className={`${styles.li} ${pathname === '/about' && styles.liActive}`}
        >
          <Link className={`${styles.link} jump-trigger`} href="/about">
            {/* <img className={styles.icon} src="/about.svg" /> */}
            <FaQuestion className={`${styles.icon} text-2xl dark:text-slate-300 text-slate-700`} />
            <span>About</span>
            {/* <AnimateBallsOnClick id="balls-box-01" /> */}
          </Link>
        </li>
        <li
          className={`${styles['li-settings']} border border-slate-600 bg-slate-200 overflow-hidden`}
        >
          <div className="flex cursor-pointer">
            <div className="py-2 dark:bg-[#1f1f1f] hover:bg-slate-400  basis-1/2 dark:border-r-zinc-500 border-r-slate-400 border-r">
              <Link className='flex justify-center w-full h-full' href='/login'>
                <BiSolidLogIn
                  className={`${styles.icon} text-slate-500 hover:text-slate-200`}
                />
              </Link>
            </div>
            <div className="flex dark:bg-[#1f1f1f] hover:bg-slate-400 justify-center items-center basis-1/2" onClick={() => {modalTurnOn('menu_settings')}}>
              <IoSettingsSharp
                className={`${styles.icon} text-slate-500 hover:text-slate-200`}
              />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}
