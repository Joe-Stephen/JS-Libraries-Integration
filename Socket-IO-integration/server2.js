import express from "express";
import socketIoClient from "socket.io-client";

const app = express();
const port = 4000;

const socket = socketIoClient("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to Server 1.");
  socket.emit("message", "Hello from Server 2.");
});

socket.on("notityClient", (notification) => {
  console.log("Received notificaiton form Server 1 : ", notification);
});

app.listen(port, () => {
  console.log(`Server 2 is running on port http://localhost:${port}`);
});
