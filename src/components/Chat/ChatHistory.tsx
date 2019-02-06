import React from 'react'

interface Props {
  messages: string[]
}

export default function ChatHistory(props: Props) {
  return (
    <div>
      {props.messages.map(message => (
        <p>{message}</p>
      ))}
    </div>
  )
}
