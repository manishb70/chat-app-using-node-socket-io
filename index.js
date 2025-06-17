const express = require("express")
const http = require("http")
const path = require("path")

const { Server } = require("socket.io")
const app = express();



const server = http.createServer(app)


const io = new Server(server);




io.on("connection", (socket) => {
    console.log("A new user is connected to the chat application socket id : ", socket.id);

    socket.on("messge", (msg) => {
        console.log(msg);
        msg.socketId= socket.id
        io.emit("recieved", msg)
    })


    socket.on("new-connection",(user)=>{
        console.log("new user is addes to the chat");
        io.emit("new-user",user)
    })


})







app.use(express.static(path.resolve("./public")))



server.listen(4000, () => {
    console.log("Server are success fullly running");
})


app.get("/", (req, res) => {
    res.sendFile("public/index.html")
})