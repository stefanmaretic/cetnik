import React, { useReducer, createContext, useMemo, useContext } from 'react'
import Sidebar from './Sidebar/'
import ChatWindow from './Chat/ChatWindow'
import { users } from '../mock-data'
import { ActiveUsersProvider } from './active-users-context'
import { SocketContextProvider } from './socket-context'

export default function App() {
  return (
    <SocketContextProvider>
      <ActiveUsersProvider>
        <Sidebar users={users as any} />
        <ChatWindow />
      </ActiveUsersProvider>
    </SocketContextProvider>
  )
}
