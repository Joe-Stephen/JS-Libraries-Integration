const express = require("express");
const Server = require("socket.io");
const notify = require("./controller");

const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server 1 is running on port http://localhost:${port}`);
});

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Server 1: new web socket connection!");
  socket.emit("Message", "Welcome to Server 1!.");
  socket.emit(
    "message",
    "Your web socket connection with Server 1 is now active."
  );
  socket.on("message", (message) => {
    console.log("Server 1 received message : ", message);
  });
  socket.on("disconnect", () => {
    console.log("Server 1: web socket connection closed");
  });

  socket.on("close", () => {
    console.log("Server 1 is closing the web socket connection.");
    socket.emit(
      "message",
      "Your web socket connection with Server 1 is closing."
    );
    socket.disconnect(true);
  });
});

app.get("/notify", notify);
module.exports = io;
