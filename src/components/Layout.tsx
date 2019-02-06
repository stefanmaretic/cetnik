import React from 'react'
import Sidebar from './Sidebar'
import styles from './App.module.css'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function MainLayout(props: Props) {
  return (
    <>
      <Sidebar />
      <div className={styles.content}>{props.children}</div>
    </>
  )
}
