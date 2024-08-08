'use client'

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
})
import styles from './sidebar.module.scss'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import AnimateBallsOnClick from './animation/animate-balls'
import { useEffect } from 'react'
import { IoSettingsSharp } from 'react-icons/io5'
import { BiSolidLogIn } from 'react-icons/bi'
import Modal, { modalTurnOn } from '@/app/ui/modal'

export default function Sidebar() {
  // for animation. now it is disabled
  // useEffect(function () {
  //   const triggers = document.querySelectorAll('.jump-trigger')
  //   triggers.forEach((elem) => {
  //     elem.addEventListener('click', function () {
  //       setTimeout(() => {
  //         const btnBox = elem.querySelector('.balls-box')
  //         btnBox?.classList.add('jump')
  //         setTimeout(() => {
  //           btnBox?.classList.remove('jump')
  //         }, 3000)
  //       }, 1000)
  //     })
  //   })
  // }, [])

  const pathname = usePathname()

  return (
    <nav>
      <button className='bg-purple-600' onClick={() => modalTurnOn('car__01')}>click here</button>
      {/* inserting absolute positioned items */}
      <Modal id='settings__01' title='hello there' text='I am a message. It is very good!!! I can swim, run, jump' />
      <Modal id='car__01' title='car'>
        <div>
          <p className='mb-5'>I am new here</p>
          <p className='mb-5'>I would love to walk</p>
        </div>
      </Modal>
      
      <ul className={`${inter.className} ${styles.ul}`}>
        <li className={`${styles.li} ${pathname === '/' && styles.liActive}`}>
          <Link className={`${styles.link} jump-trigger relative`} href="/">
            <img className={styles.icon} src="/menu.svg" />
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
            <img className={styles.icon} src="/pen.svg" />
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
            <img className={styles.icon} src="/profile.svg" />
            <span>Profile</span>
            {/* <AnimateBallsOnClick id="balls-box-01" /> */}
          </Link>
        </li>
        <li
          className={`${styles.li} ${pathname === '/about' && styles.liActive}`}
        >
          <Link className={`${styles.link} jump-trigger`} href="/about">
            <img className={styles.icon} src="/about.svg" />
            <span>About</span>
            {/* <AnimateBallsOnClick id="balls-box-01" /> */}
          </Link>
        </li>
        <li
          className={`${styles['li-settings']} border border-slate-600 bg-slate-200 overflow-hidden`}
        >
          <div className="flex cursor-pointer">
            <div className="py-2 hover:bg-slate-400  basis-1/2 border-r-slate-400 border-r">
              <Link className='flex justify-center w-full h-full' href='/login'>
                <BiSolidLogIn
                  className={`${styles.icon} text-slate-500 hover:text-slate-200`}
                />
              </Link>
            </div>
            <div className="flex hover:bg-slate-400 justify-center items-center basis-1/2" onClick={() => {modalTurnOn('settings__01')}}>
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
