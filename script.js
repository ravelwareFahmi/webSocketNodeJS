const socket = io('http://localhost:5000')

socket.on('lux', data => {
    console.log(data);
})

// const messageContainer = document.getElementById('message-container')
// const messageForm = document.getElementById('send-container')
// const messageInput = document.getElementById('message-input')

// const name = prompt('what is your name?')
// appendMessage('You Joined')
// socket.emit('new-user', name)

// socket.on('chat-message', data => {
//     // console.log(data);
//     appendMessage(`${data.name}: ${data.message}`)
// })

// // user connect 
// socket.on('user-connected', name => {
//     appendMessage(`${name} connected`)
// })

// // disconnect user 
// socket.on('user-disconnected', name => {
//     appendMessage(`${name} disconnected`)
// })

// messageForm.addEventListener('submit', e => {
//     e.preventDefault()
//     const message = messageInput.value
//     appendMessage(`You: ${message}`)
//     socket.emit('send-chat-message', message)
//     messageInput.value = ''
// })

// function appendMessage(message){
//     const messageElement = document.createElement('div')
//     messageElement.innerText = message
//     messageContainer.append(messageElement)
// }