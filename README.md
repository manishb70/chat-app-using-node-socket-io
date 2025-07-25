
# Chat App Using Node.js and Socket.IO

This project is a simple real-time chat application built using Node.js, Express, and Socket.IO. It allows users to connect, send messages, and see new users join the chat in real time.

## How I Created This Chat App

### 1. Project Setup
- Initialized a new Node.js project with `npm init`.
- Installed required dependencies:
  - `express` for the web server
  - `socket.io` for real-time communication

### 2. Server Implementation
- Created an `index.js` file for the server logic.
- Set up an Express server and served static files from the `public` directory.
- Integrated Socket.IO with the HTTP server to handle real-time events.
- Handled socket events:
  - `connection`: Logs when a user connects and sets up auto-disconnect after 10 minutes.
  - `messge`: Receives messages from clients and broadcasts them to all users.
  - `new-connection`: Notifies all users when a new user joins.
  - `disconnect`: Cleans up when a user disconnects.

### 3. Frontend
- Created a simple `index.html` file in the `public` folder to interact with the chat server using Socket.IO client.

### 4. Running the App
- Start the server with:
  ```bash
  node index.js
  ```
- Open `http://localhost:4000` in your browser to use the chat app.

## Features
- Real-time messaging between users
- Notification when new users join
- Automatic disconnection after 10 minutes of inactivity

## Folder Structure
```
index.js
package.json
README.md
vercel.json
public/
    index.html
```

## Requirements
- Node.js
- npm

## License
MIT
