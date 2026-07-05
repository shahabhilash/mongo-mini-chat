# Mongo Mini Chat

A simple and lightweight chat platform where users can communicate instantly and easily. Built with Node.js, Express, and MongoDB.

## Features

- **Create Chats:** Send new messages to other users.
- **Read Chats:** View the history of all chat messages.
- **Edit Chats:** Update your previous messages.
- **Delete Chats:** Remove messages from the chat history.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Templating:** EJS (Embedded JavaScript templates)
- **Other Tools:** `method-override` (for PUT and DELETE requests)

## Prerequisites

Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on default port `27017`)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shahabhilash/mongo-mini-chat.git
   cd mongo-mini-chat
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Ensure MongoDB is running:**
   Start your local MongoDB server. The application expects it to be running at `mongodb://localhost:27017/myapp`.

4. **Start the server:**
   ```bash
   node index.js
   ```

5. **Open the application:**
   Navigate to [http://localhost:8080/chats](http://localhost:8080/chats) in your browser.
