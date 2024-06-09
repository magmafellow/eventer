'use client'

import styles from './creative-admit-form.module.scss'

function Admit(){
  return <button className={styles.admit} type="submit">admit</button>
}

export default function CreativeAdmitForm(){
  return (
    <form action="">
      <div className={styles.titleOuterWrapper}>
        <div className={styles.titleLabelBox}><label className={styles.titleLabel} htmlFor="title">title</label></div>
        <div className={styles.inputTitleBox}>
          <input className={styles.inputTitle} name="title" id="title" type="text" placeholder="Your title here..." />
        </div>
      </div>
      <div className={styles.contentOuterWrapper}>
        <div className={styles.contentLabelBox}><label className={styles.contentLabel} htmlFor="content">content</label></div>
        <div className={styles.textareaContentBox}>
          <textarea className={styles.textareaContent} name="content" id="content" placeholder="content..." />
        </div>
      </div>
      <div className={styles.admitBox}><Admit /></div>
    </form>
  )
}