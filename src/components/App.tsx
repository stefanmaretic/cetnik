import React, { useReducer, createContext, useMemo, useContext } from 'react'
import Sidebar from './Sidebar/'
import ChatWindow from './Chat/ChatWindow'
import Chat from './Chat/Chat'
import { users } from '../mock-data'

interface State {
  activeUsers: string[]
}

enum ActionType {
  AddActiveUser = 'AddActiveUser',
  RemoveActiveUser = 'RemoveActiveUser',
}

interface Action {
  type: string
  payload: string
}

const initialState: State = {
  activeUsers: [],
}

interface ActiveUsersContextType {
  state: State
  dispatch: (updater: Action) => void
}

export const ActiveUsersContext = createContext<
  ActiveUsersContextType | undefined
>(undefined)

function reducer(state: State, { type, payload }: Action): State {
  function userExists(username: string) {
    return state.activeUsers.includes(username)
  }
  switch (type) {
    case ActionType.AddActiveUser: {
      if (!userExists(payload)) {
        return {
          ...state,
          activeUsers: [...state.activeUsers, payload],
        }
      }
      return state
    }
    case ActionType.RemoveActiveUser: {
      if (!userExists(payload)) {
        return {
          ...state,
          activeUsers: state.activeUsers.filter(user => user !== payload),
        }
        return state
      }
    }
    default:
      return state
  }
}

export function useActiveUsers() {
  const context = useContext(ActiveUsersContext)
  if (!context) {
    throw new Error(
      'useActiveUsers must be used within a <ActiveUsersContext.Provider> component'
    )
  }
  const { state, dispatch } = context
  function addActiveUser(username: string) {
    dispatch({ type: ActionType.AddActiveUser, payload: username })
  }
  return {
    state,
    addActiveUser,
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  React.useEffect(() => {
    console.log(state)
  })
  const contextMemo = useMemo(() => {
    return {
      state,
      dispatch,
    }
  }, [state])
  return (
    <ActiveUsersContext.Provider value={contextMemo}>
      <Sidebar users={users as any} />
      <ChatWindow>
        {state.activeUsers.map(username => (
          <Chat user={username} />
        ))}
      </ChatWindow>
    </ActiveUsersContext.Provider>
  )
}
