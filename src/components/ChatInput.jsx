
function ChatInput({ text, setText, sendMessage }) {
  return (
    <form className="chat-input" onSubmit={sendMessage}>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
      />

      <button type="submit">
        Send
      </button>

    </form>
  );
}

export default ChatInput;
