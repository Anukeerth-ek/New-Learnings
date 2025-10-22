const http = require('http').createServer();

const io = require('socket.io')('http', {
    cors: {origin: "*"}
})

io.on("connection", (socket) => {
    console.log("A user Connected")

    socket.on("message", (message) => {
        
    })
})