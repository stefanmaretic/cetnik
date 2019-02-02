import React from 'react'
import styles from './Chat.module.css'

const MessageBar: React.SFC = () => (
  <input type="text" className={styles.messageBar} />
)

export default MessageBar
