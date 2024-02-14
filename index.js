const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const PORT = 3000;
const app = express();
const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
    origin: ["http://localhost:5176", "http://127.0.0.1:5176","http://127.0.0.1:5173", "http://localhost:5173"]
}});



io.on('connection', (socket) => {
    console.log("client connected:〰️", socket.id);

    socket.on('connect', (data)=>{
        console.log(socket.id, ": ", data);
    });

    socket.on('1', (data)=>{
        console.log(socket.id, ": ", data);
        socket.emit('1', data)
    });

    socket.on('disconnect', ()=>{
        console.log("disconnect : ", socket.id);
    })
});

app.get('/', (req, res) => {
    console.log("☕");
    res.send("Hello World!🎶🎶");
});

httpServer.listen(PORT, () => console.log(`****server is listening on ${PORT}****`));
