import React, { createContext, useContext } from 'react'
import io from 'socket.io-client'

export const SocketContext = createContext<any | undefined>(undefined)

interface Props {
  children: React.ReactNode
}

export function SocketContextProvider({ children }: Props) {
  const socket = io('http://localhost:3000')
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

export function useSocket() {
  const context = useContext(SocketContext)
  if (!context) {
    throw new Error('useSocket needs to be inside of a SocketContextProvider')
  }
  return context
}
