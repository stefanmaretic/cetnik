import React from 'react'
import styles from './Chat.module.css'

interface Props {
  value: string
  onChange: Function
}

export default function MessageBar(props: Props) {
  const { value, onChange } = props
  return (
    <input
      type="text"
      value={value}
      className={styles.messageBar}
      onChange={e => onChange(e.target.value)}
    />
  )
}
