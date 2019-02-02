import React from 'react'
import styles from './Chat.module.css'
import MessageBar from './MessageBar'

const ChatWindow: React.SFC = () => (
  <div className={styles.chatWindow}>
    {/*  */}
    <MessageBar />
  </div>
)

export default ChatWindow
