import React from 'react'
import styles from './Sidebar.module.css'
import Contact from './Contact'

interface Props {
  users: [
    {
      id: number
      username: string
      firstName: string
      lastName: string
      desc: string
    }
  ]
}

function Sidebar({ users }: Props) {
  return (
    <aside className={styles.sidebar}>
      {users.map(user => (
        <Contact key={user.id} data={user} />
      ))}
    </aside>
  )
}

export default Sidebar
