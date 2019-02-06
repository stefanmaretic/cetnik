import React from 'react'
import ChatWindow from './Chat/'
import MainLayout from './Layout'
import styles from './App.module.css'

export default function App() {
  return (
    <MainLayout>
      <div className={styles.flexContainer}>
        <ChatWindow />
      </div>
    </MainLayout>
  )
}
