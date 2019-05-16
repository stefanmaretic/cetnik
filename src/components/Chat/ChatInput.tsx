import React, { useState } from 'react'

import styles from './ChatWindow.module.css'

export default function ChatInput() {
  const [value, update] = useState('')

  return (
    <div className={styles.chatInputContainer}>
      <input
        className={styles.chatInput}
        type="text"
        placeholder="Enter message here..."
        value={value}
        onChange={e => update(e.target.value)}
      />
      <button type="button" className={styles.chatInputButton}>
        Submit
      </button>
    </div>
  )
}
