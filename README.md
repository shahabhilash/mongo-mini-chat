# Mongo Mini Chat 💬

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

Mongo Mini Chat is a robust, lightweight chat application engineered to facilitate seamless messaging. Built on a modern Node.js stack, it demonstrates the implementation of a full CRUD (Create, Read, Update, Delete) lifecycle for instant communications, leveraging MongoDB for persistent data storage.

---

## 📑 Table of Contents
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Local Development Setup](#️-local-development-setup)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Features

- **Message Creation:** Instantly draft and send messages to peers with automatic timestamp generation.
- **Message Retrieval:** Maintain a comprehensive and persistent history of all communications.
- **Message Modification:** Seamlessly edit previously sent messages to correct typos or update information.
- **Message Deletion:** Permanently remove selected messages from the communication thread.
- **Server-Side Rendering:** Utilizes EJS templates for dynamic HTML generation and rapid rendering.

## 🛠️ Tech Stack

- **Runtime Environment:** [Node.js](https://nodejs.org/)
- **Web Framework:** [Express.js](https://expressjs.com/) - Handling HTTP requests and routing.
- **Database:** [MongoDB](https://www.mongodb.com/) - NoSQL database for flexible data storage.
- **ODM (Object Data Modeling):** [Mongoose](https://mongoosejs.com/) - Schema-based modeling for application data.
- **View Engine:** [EJS](https://ejs.co/) (Embedded JavaScript templating) - Generating HTML markup with plain JavaScript.
- **Middleware:** `method-override` - Facilitates RESTful routing for HTTP `PUT` and `DELETE` methods within standard HTML forms.

## 📂 Project Structure

```text
mongo-mini-chat/
├── models/
│   └── chat.js          # Mongoose schema and model for Chat
├── views/
│   ├── index.ejs        # Main view displaying all chats
│   ├── new.ejs          # Form view to create a new chat
│   └── edit.ejs         # Form view to edit an existing chat
├── public/              # Static assets (CSS, images, client-side JS)
├── index.js             # Application entry point and route definitions
├── package.json         # Project metadata and dependency tree
└── README.md            # Project documentation
```

## 📡 API Reference

The application follows standard RESTful routing conventions.

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Health check / basic test route |
| `GET` | `/chat` | Retrieves and displays all chat messages |
| `GET` | `/chats/new` | Renders the form to compose a new message |
| `POST` | `/chats` | Creates a new chat message in the database |
| `GET` | `/chats/:id/edit`| Renders the form to edit a specific message |
| `PUT` | `/chats/:id` | Updates a specific message in the database |
| `DELETE` | `/chats/:id` | Deletes a specific message from the database |

## ⚙️ Local Development Setup

To run this project locally, ensure you have Node.js and MongoDB installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/shahabhilash/mongo-mini-chat.git
cd mongo-mini-chat
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Initialize the Database
Ensure your local MongoDB instance is actively running. The application is configured to connect to the default MongoDB URI:
```
mongodb://localhost:27017/myapp
```

### 4. Boot the Server
Start the Express server to handle incoming requests:
```bash
node index.js
```
*Note: The server will start and listen on port `8080`.*

### 5. Access the Application
Open your preferred web browser and navigate to the chat interface:
```
http://localhost:8080/chat
```

## 💡 Future Enhancements

- [ ] Add user authentication and authorization.
- [ ] Implement WebSockets (e.g., Socket.io) for real-time communication.
- [ ] Improve UI/UX with a modern CSS framework like Tailwind CSS.
- [ ] Add pagination for chat history.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shahabhilash/mongo-mini-chat/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.
