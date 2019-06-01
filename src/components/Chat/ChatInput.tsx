import React, { useState } from 'react'
import styles from './ChatWindow.module.css'
import { useSocket } from '../socket-context'

interface Props {
  user: string
}

export default function ChatInput({ user }: Props) {
  const [value, update] = useState('')
  const socket = useSocket()
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value) {
      socket.emit('chat message', { user, value })
    }
    update('')
  }
  return (
    <form onSubmit={onSubmit} className={styles.chatInputContainer}>
      <input
        className={styles.chatInput}
        type="text"
        placeholder="Enter message here..."
        value={value}
        onChange={e => update(e.target.value)}
      />
      <button type="submit" className={styles.chatInputButton}>
        Submit
      </button>
    </form>
  )
}
