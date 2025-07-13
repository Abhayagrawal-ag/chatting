// // index.js
// import express from "express";
// import http from "http";
// import { Server } from "socket.io";
// import cors from "cors";
// // import path from "path";
// // import { fileURLToPath } from "url";
// import dotenv from 'dotenv'
// dotenv.config();

// const app = express();
// app.use(cors("https://chatting-frontend-j6ta.onrender.com"));
// const PORT = process.env.PORT || 3000;

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*", // frontend origin
//     methods: ["GET", "POST"]
//   }
// });

// // Real-time socket logic
// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   socket.on("send_message", (data) => {
//     io.emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// // Start server
// server.listen(PORT, () => {
//   console.log("Server running on http://localhost:3000");
// });

// index.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors("https://chatting-frontend-j6ta.onrender.com")); // ✅ Your frontend domain
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // ✅ Allow all origins
    methods: ["GET", "POST"]
  }
});

// ✅ Real-time socket logic with ROOM support
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", ({ name, message, room }) => {
    const msgData = { name, message, room };

    // ✅ Join the specific room based on accessCode
    socket.join(room);

    // ✅ Broadcast message to that room only
    io.to(room).emit("receive_message", msgData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// ✅ Start server
server.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});

