import React, { createContext, useContext } from 'react'

interface State {
  activeUsers: string[]
}

enum ActionType {
  ToggleUser = 'ToggleUser',
  RemoveUser = 'RemoveUser',
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
  /**
   * Check if the user exists.
   * @param {string} username - The username by which the user gets checked
   */
  function userExists(username: string) {
    return state.activeUsers.includes(username)
  }
  const user = userExists(payload)
  switch (type) {
    case ActionType.RemoveUser:
      return {
        ...state,
        activeUsers: state.activeUsers.filter(user => payload !== user),
      }
    case ActionType.ToggleUser:
      if (!user) {
        return {
          ...state,
          activeUsers: [...state.activeUsers, payload],
        }
      } else {
        return {
          ...state,
          activeUsers: state.activeUsers.filter(user => payload !== user),
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
  function toggleUser(username: string): void {
    dispatch({ type: ActionType.ToggleUser, payload: username })
  }
  function removeUser(username: string): void {
    dispatch({ type: ActionType.RemoveUser, payload: username })
  }
  return {
    state,
    toggleUser,
    removeUser,
  }
}

interface Props {
  children: React.ReactNode
}

export function ActiveUsersProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const contextMemo = React.useMemo(() => {
    return {
      state,
      dispatch,
    }
  }, [state])
  return (
    <ActiveUsersContext.Provider value={contextMemo}>
      {children}
    </ActiveUsersContext.Provider>
  )
}
