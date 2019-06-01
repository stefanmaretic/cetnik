import React, { useState, useEffect } from 'react'
import styles from './ChatWindow.module.css'
import ChatInput from './ChatInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useActiveUsers } from '../active-users-context'
import { useSocket } from '../socket-context'
import produce from 'immer'

interface Props {
  user: string
}

export default function Chat({ user }: Props) {
  const [messages, update] = useState<any>([])
  const { removeUser } = useActiveUsers()
  const socket = useSocket()
  function onClick() {
    removeUser(user)
  }
  useEffect(() => {
    socket.on('chat message', function(msg: any) {
      console.log('got into socket')
      if (msg.user === user) {
        console.log('messages updated')
        update(produce(messages, draft => draft.push(msg)))
      }
    })
  })
  return (
    <>
      <div className={styles.textContainer}>
        <div className={styles.textHeader}>
          <span>{user}</span>
          <div className={styles.closeButton} onClick={onClick}>
            <FontAwesomeIcon icon="times" />
          </div>
        </div>
        {messages.map((msg: any, index: number) => (
          <p key={`${msg}-${index}`}>{msg.value}</p>
        ))}
        <ChatInput user={user} />
      </div>
    </>
  )
}
