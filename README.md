# ConnectMeet 🎥

ConnectMeet is a full-stack video conferencing web application that enables users to connect through real-time video calls with features such as screen sharing, chat, and microphone/camera controls.

## 🌐 Live Demo

[ConnectMeet](https://connectmeet-frontend-1.onrender.com)

## 🚀 Features

- 🎥 Real-time video conferencing
- 🎤 Mute / Unmute microphone
- 📹 Turn camera on / off
- 🖥️ Screen sharing
- 💬 Real-time chat
- 🕒 Meeting history
- 🔗 Meeting rooms through unique URLs
- ⚡ Real-time communication using WebSockets
- 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- WebRTC

### Backend
- Node.js
- Express.js
- WebSockets
- MongoDB
- Mongoose

### Deployment
- Render

## 🏗️ Project Architecture

```text
                 ┌─────────────────────┐
                 │      React UI       │
                 │      Frontend       │
                 └──────────┬──────────┘
                            │
                     HTTP / WebSocket
                            │
                            ▼
                 ┌─────────────────────┐
                 │   Node.js + Express │
                 │       Backend       │
                 └──────────┬──────────┘
                            │
                 ┌──────────┴──────────┐
                 │                     │
                 ▼                     ▼
        ┌────────────────┐    ┌────────────────┐
        │   WebSockets   │    │    MongoDB     │
        │ Real-time      │    │ Meeting Data   │
        │ Communication  │    │ & History      │
        └────────────────┘    └────────────────┘


ConnectMeet/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md



🎥 How to Use
Open the ConnectMeet application.
Create or join a meeting.
Allow camera and microphone permissions.
Share the meeting link with other participants.
Use the available controls to:
Mute/unmute microphone
Turn camera on/off
Share your screen
Send messages through chat
End the meeting when finished.
🔮 Future Improvements
👥 Support for more participants
🔒 Improved meeting security
📅 Meeting scheduling
🔔 Meeting notifications
📱 Improved mobile experience
☁️ Cloud meeting recording
👤 User authentication and profiles
🎙️ Improved audio/video quality
