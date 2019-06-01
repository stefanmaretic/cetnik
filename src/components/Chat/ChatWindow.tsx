import React from 'react'
import styles from './ChatWindow.module.css'
import { useActiveUsers } from '../active-users-context'
import Chat from './Chat'

export default function ChatWindow() {
  const { state } = useActiveUsers()
  return (
    <main className={styles.chatWindow}>
      {state.activeUsers.map(username => (
        <Chat key={username} user={username} />
      ))}
    </main>
  )
}
