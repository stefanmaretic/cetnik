import React from 'react'
import styles from './ChatWindow.module.css'

interface Props {
  children: React.ReactNode
}

export default function ChatWindow({ children }: Props) {
  return <main className={styles.chatWindow}>{children}</main>
}
