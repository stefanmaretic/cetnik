import React from 'react'
import styles from './Sidebar.module.css'

interface Props {
  data: {
    imgSrc?: string
    username: string
    firstName: string
    lastName: string
    desc: string
  }
}

export default function Contact(props: Props) {
  const {
    data: { imgSrc, username, firstName, lastName, desc },
  } = props
  return (
    <div className={styles.sidebarItem}>
      <img
        className={styles.avatar}
        src={imgSrc}
        alt={`${username} profile image`}
      />
      <div className={styles.userText}>
        <p className={styles.sidebarTitle}>{username}</p>
        <small>{desc}</small>
      </div>
    </div>
  )
}
