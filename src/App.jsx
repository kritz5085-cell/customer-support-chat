
import { useState } from "react";

import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";

import "./App.css";

function App() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "support",
      text: "Hello! Welcome to customer support. How can I help you?"
    }
  ]);

  const [text, setText] = useState("");

  function sendMessage(e) {

    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: text.trim()
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage
    ]);

    setText("");

    // Simulated support response
    setTimeout(() => {

      const supportMessage = {
        id: Date.now() + 1,
        sender: "support",
        text: "Thank you for contacting us. How may I assist you further?"
      };

      setMessages((prevMessages) => [
        ...prevMessages,
        supportMessage
      ]);

    }, 700);
  }

  return (
    <div className="page">

      <div className="chat-container">

        <ChatHeader />

        <MessageList messages={messages} />

        <ChatInput
          text={text}
          setText={setText}
          sendMessage={sendMessage}
        />

      </div>

    </div>
  );
}

export default App;
