
function MessageList({ messages }) {
  return (
    <div className="message-list">

      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender}`}
        >
          <span className="sender">
            {message.sender === "user" ? "You" : "Support"}
          </span>

          <p>{message.text}</p>
        </div>
      ))}

    </div>
  );
}

export default MessageList;
