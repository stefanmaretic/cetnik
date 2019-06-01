const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3000

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

io.on('connection', function(socket) {
  console.log('A user connected')

  socket.on('disconnect', function() {
    console.log('User disconnected')
  })
  socket.on('chat message', function(msg) {
    console.log(msg.user, ':', msg.value)
    io.emit('chat message', msg)
  })
})

http.listen(port, function() {
  console.log('listening on *:3000')
})
