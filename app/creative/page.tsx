import { getDaysInThisMonth, getFormattedDate } from '../lib/utils'
import styles from './page.module.scss'
import Sidebar from '@/app/ui/sidebar'
import CreativeAdmitForm from '@/app/ui/creative-admit-form'
import Link from 'next/link'

export default function Page() {
  const dateObj = new Date()
  const date = getFormattedDate(dateObj)

  return (
    <>
      <h2 className={styles.logotype}><Link className="logo-link" href='/'>Eventer</Link></h2>
      <div className={styles.container}>
        <div className={styles.sidebarBox}>
          <Sidebar />
        </div>
        <div className={styles.contentBox}>
          {/* upper box for profile logo and profile info */}
          <div className={styles.upperBox}>
            <div className={styles.formRow}>
              <label className={styles.importanceLabel} htmlFor="importance">
                Importance:
              </label>
              <select
                className={styles.importanceSelect}
                name="importance"
                id="importance"
              >
                <option value="common">common</option>
                <option value="medium">medium</option>
                <option value="crucial">crucial</option>
              </select>
            </div>
            <div className={styles.formRow}>
              <label className={styles.importanceLabel} htmlFor="tags">
                Tags:
              </label>
              <input
                className={styles.inputTags}
                type="text"
                name="tags"
                id="tags"
                placeholder="tags sep. by comma"
              />
            </div>
          </div>
          {/* bottom box for info about person */}
          <div className={styles.bottomBox}>
            <div className={styles.dateBox}>
              <span className={styles.date}>{date}</span>
              <div className={styles.arrowBox}>
                <img
                  className={styles.arrow}
                  src="/left-arrow.svg"
                  alt="left arrow"
                />
                <img
                  className={styles.arrow}
                  src="/right-arrow.svg"
                  alt="right arrow"
                />
              </div>
            </div>
            <div className={styles.formWrapper}>
              <CreativeAdmitForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
