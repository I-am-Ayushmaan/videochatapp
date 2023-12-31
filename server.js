// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send a welcome message to the connected client
  socket.emit('message', { text: 'Welcome to the chat!', sender: 'Server' });

  // Listen for incoming messages
  socket.on('message', (message) => {
    // Broadcast the message to all connected clients
    io.emit('message', { text: message, sender: 'Someone' });
  });

  // Clean up when a user disconnects
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

