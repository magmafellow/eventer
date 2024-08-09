import Link from 'next/link'
import styles from './page.module.scss'
import Sidebar from '@/app/ui/sidebar'

export default function Page() {
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
            <div className={`${styles.profileLogo} dark:outline dark:outline-slate-300`}>
              <img
                className={`${styles.profileLogoImg}`}
                src="/me-bycicle.jpg"
                alt="me photo"
              />
            </div>
            <div className={styles.profileInfo}>
              <ul className={styles.infoList}>
                <li>
                  <span className={styles.infoLabel}>first name</span>
                  <span className={styles.infoDelemiter}>-</span>
                  <span className={styles.infoValue}>Alex</span>
                </li>
                <li>
                  <span className={styles.infoLabel}>home country</span>
                  <span className={styles.infoDelemiter}>-</span>
                  <span className={styles.infoValue}>Russia</span>
                </li>
                <li>
                  <span className={styles.infoLabel}>last name</span>
                  <span className={styles.infoDelemiter}>-</span>
                  <span className={styles.infoValue}>Romanov</span>
                </li>
                <li>
                  <span className={styles.infoLabel}>location now</span>
                  <span className={styles.infoDelemiter}>-</span>
                  <span className={styles.infoValue}>Moscow</span>
                </li>
                <li>
                  <span className={styles.infoLabel}>age</span>
                  <span className={styles.infoDelemiter}>-</span>
                  <span className={styles.infoValue}>19</span>
                </li>
              </ul>
            </div>
          </div>
          {/* bottom box for info about person */}
          <div className={styles.bottomBox}>
            <div className={styles.infoContainer}>
              <div className={styles.infoTitle}>about me:</div>
              <div className={styles.infoPContainer}>
                <p className={styles.infoP}>
                  I am a software developer. Creator of this platform. Love to
                  live and apretiate every moment that i can consume.
                </p>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoTitle}>interests:</div>
              <ul className={styles.infoUl}>
                <li className={styles.infoLi}>walking</li>
                <li className={styles.infoLi}>swimming</li>
                <li className={styles.infoLi}>making meal</li>
              </ul>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoTitle}>interests:</div>
              <ul className={styles.infoUl}>
                <li className={styles.infoLi}>
                  <span>telegram</span>
                  <span> - </span>
                  <span>@polrekost</span>
                </li>
                <li className={styles.infoLi}>
                  <span>mail</span>
                  <span> - </span>
                  <span>magmafellow@gmail.com</span>
                </li>
                <li className={styles.infoLi}>
                  <span>phone number</span>
                  <span> - </span>
                  <span>8(926)939-34-57</span>
                </li>
              </ul>
            </div>
            <div className='text-center'>
              <Link href="/profile/edit" className={styles.editBtn}>edit</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
