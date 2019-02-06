declare namespace Chat {
  type Message = {
    id: string
    text: string
    user: {
      id: string
    }
  }

  type State = {
    messages: Message[]
  }

  type Action = {
    type: string
    payload: Message[]
  }
}
