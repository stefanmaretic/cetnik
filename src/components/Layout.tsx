import React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.SFC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Layout
