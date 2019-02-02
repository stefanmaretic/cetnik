import React, { Component } from 'react'
import ChatWindow from './Chat/'
import Sidebar from './Sidebar/'
import MainLayout from './Layout'

class App extends Component {
  render() {
    return (
      <MainLayout>
        <ChatWindow />
      </MainLayout>
    )
  }
}

export default App
