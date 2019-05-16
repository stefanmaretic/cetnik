import React from 'react'
import { useActiveUsers } from '../App'

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

const Contact: React.FC<Props> = ({
  data: { imgSrc, username, firstName, lastName, desc },
}) => {
  const { addActiveUser } = useActiveUsers()
  function onClick() {
    addActiveUser(username)
  }
  return (
    <div className={styles.sidebarItem} onClick={onClick}>
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

export default Contact
