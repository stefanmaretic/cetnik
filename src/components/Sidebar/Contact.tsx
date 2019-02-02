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

const Contact: React.SFC<Props> = ({
  data: { imgSrc, username, firstName, lastName, desc },
}) => (
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

export default Contact
