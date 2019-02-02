import React from 'react'
import styles from './Sidebar.module.css'
import Contact from './Contact'

import { users } from '../../mock-data'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {users.map(user => (
        <Contact key={user.id} data={user} />
      ))}
    </aside>
  )
}

export default Sidebar
