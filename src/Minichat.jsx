import React, { useState } from "react";

export default function MiniChatApp() {
  // Input state
  const [message, setMessage] = useState("");

  // Messages state
  const [chatList, setChatList] = useState([]);

  // Send message function
  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    setChatList([...chatList, message]);
    setMessage("");
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "150px auto",
        padding: "20px",
        borderRadius: "15px",
        background: "#f4f7ff",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        fontFamily: "Arial",
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "20px",
        }}
      >
        💬 Mini Chat App
      </h2>

      {/* Input and Button */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#4a90e2",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send
        </button>
      </div>

      {/* Messages Section */}
      <div
        style={{
          marginTop: "20px",
          maxHeight: "250px",
          overflowY: "auto",
        }}
      >
        {chatList.length === 0 ? (
          <p style={{ color: "gray", textAlign: "center" }}>
            No messages yet...
          </p>
        ) : (
          chatList.map((msg, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "10px",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              🧑 {msg}
            </div>
          ))
        )}
      </div>
    </div>
  );
}