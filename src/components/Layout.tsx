import React from 'react'
import Sidebar from './Sidebar'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const MainLayout: React.SFC<Props> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: 300 }}>{children}</div>
    </>
  )
}

export default MainLayout
