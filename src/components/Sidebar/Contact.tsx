import React from 'react'
import { useActiveUsers } from '../active-users-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  const { state, toggleUser } = useActiveUsers()
  function onClick() {
    toggleUser(username)
  }
  function userActive(username: string): boolean {
    return state.activeUsers.includes(username)
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
      {userActive(username) && (
        <div className={styles.arrow}>
          <FontAwesomeIcon icon="caret-square-right" />
        </div>
      )}
    </div>
  )
}

export default Contact
