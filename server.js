const io = require('socket.io')(3000)

const users = {}

io.on('connection', socket => {
    socket.on('new-user', name=>{
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    // console.log('new User');
    // socket.emit('chat-message', 'Hello World')
    socket.on('send-chat-message', message => {
        // console.log(message);
        socket.broadcast.emit('chat-message', message)
    })
})