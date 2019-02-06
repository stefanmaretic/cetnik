import React from 'react'

interface Props {
  message: Chat.Message
}

export default function Message(props: Props) {
  const { message } = props
  return (
    <div>
      <p>{message.user}</p>
      <p>{message.text}</p>
    </div>
  )
}
