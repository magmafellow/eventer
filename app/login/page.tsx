'use client'

import Link from 'next/link'
import styles from './page.module.scss'
import Sidebar from '@/app/ui/sidebar'
import Summary from '@/app/ui/summary'
import Calendar from '@/app/ui/calendar'
import { useState } from 'react'
import clsx from 'clsx'
import LoginForm from '@/app/ui/login/login-form'
import SignupForm from '../ui/login/signup-form'

export default function Page() {
  const [formMode, setFormMode] = useState('signup')

  return (
    <>
      <h2 className={styles.logotype}>
        <Link className="logo-link" href="/">
          Eventer
        </Link>
      </h2>
      <div className={styles.container}>
        <div className={styles.sidebarBox}>
          <Sidebar />
        </div>
        <div className={styles.contentBox}>
          <div className="flex gap-4 mb-4">
            <div className="cursor-pointer flex justify-center items-center font-semibold tracking-wider basis-1/2 bg-rose-900 dark:hover:bg-rose-800 text-rose-300 py-2 px-4 rounded-lg relative"
            onClick={() => {setFormMode('login')}}>
              Login
              {/* container for pulse circles */}
              <div className={clsx({
                'hidden': formMode === 'signup'
              })}>
                <div
                  className={`${styles['signup-pulse']} bg-rose-300 opacity-35 absolute rounded-full -top-[10px] -right-[10px]`}
                ></div>
                <div className="absolute w-5 h-5 rounded-full bg-rose-500 -top-2 -right-2"></div>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-zinc-500"></div>
            <div className="relative cursor-pointer flex justify-center items-center font-semibold tracking-wider basis-1/2 dark:bg-emerald-900 dark:hover:bg-emerald-800 dark:text-emerald-300 py-2 px-4 rounded-lg"
            onClick={() => setFormMode('signup')}>
              Signup
              {/* container for pulse circles */}
              <div className={clsx({
                'hidden': formMode === 'login'
              })}>
                <div
                  className={`${styles['signup-pulse']} bg-emerald-300 opacity-35 absolute rounded-full -top-[10px] -right-[10px]`}
                ></div>
                <div className="absolute w-5 h-5 rounded-full bg-emerald-500 -top-2 -right-2"></div>
              </div>
            </div>
          </div>
          {/* <div className='pl-4 text-zinc-400 text-lg tracking-wider'>{ formMode === 'signup' ? 'Signup' : 'Login' }</div> */}

          <div className={clsx({
            'hidden': formMode === 'signup'
          })}>
            <LoginForm />
          </div>

          <div className={clsx({
            'hidden': formMode === 'login'
          })}>
              <SignupForm />
          </div>
        </div>
      </div>
    </>
  )
}
