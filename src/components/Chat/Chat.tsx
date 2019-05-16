import React from 'react'
import styles from './ChatWindow.module.css'
import ChatInput from './ChatInput'

interface Props {
  user: string
}

export default function Chat({ user }: Props) {
  return (
    <>
      <div className={styles.textContainer}>
        <p>some text</p>
        <p>some text</p>
        <p>some text</p>
        <p>some text</p>
        <ChatInput />
      </div>
    </>
  )
}
