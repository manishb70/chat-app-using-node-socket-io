const express = require("express");
const http = require("http");
const path = require("path");

const { Server } = require("socket.io");
const app = express();

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A new user is connected to the chat application socket id : ", socket.id);

    const autoDisconnect = setTimeout(() => {
        if (socket.connected) {
            socket.disconnect(true);
            console.log("Socket auto-disconnected after 10 minutes:", socket.id);
        }
    }, 10 * 60 * 1000); 

    // Clear timeout if socket disconnects early
    socket.on("disconnect", () => {
        clearTimeout(autoDisconnect);
        console.log("Socket disconnected:", socket.id);
    });

    socket.on("messge", (msg) => {
        console.log(msg);
        msg.socketId = socket.id;
        io.emit("recieved", msg);
    });

    socket.on("new-connection", (user) => {
        console.log("New user is added to the chat");
        io.emit("new-user", user);
    });
});

app.use(express.static(path.resolve("./public")));

server.listen(4000, "0.0.0.0",() => {
    console.log("Server is successfully running on port 4000");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});
