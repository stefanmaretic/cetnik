import React, { useState, useEffect, DOMElement } from 'react'
import styles from './Chat.module.css'
import ChatInput from './ChatInput'

export default function ChatWindow() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([''])

  function addMessage(e: KeyboardEvent) {
    if (message) {
      if (e.keyCode === 13) {
        setMessages(m => m.concat(message))
        setMessage('')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', addMessage)
    return () => window.removeEventListener('keyup', addMessage)
  }, [message])

  return (
    <div className={styles.chatWindow}>
      {messages.map(message => (
        <p>{message}</p>
      ))}
      <ChatInput value={message} onChange={setMessage} />
    </div>
  )
}
