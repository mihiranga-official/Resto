import React, { useState } from "react";
import "./Chatbot.css";

const commonQuestions = {
  Hi: "How can I help you?",
  hi: "How can I help you?",
  "What is your Name?": "Salon Lilly.",
  "How do I book?": "Call 077 2186654 or book online.",
  "What services do you offer?":
    "Haircuts, coloring, styling, manicures, pedicures, facials, and massages.",
  "What are your prices?": "Check our website for a full price list.",
  "Any special offers?":
    "Yes, check our website or social media for promotions.",
  "Do you have gift cards?": "Yes, available in-salon and online.",
  "Do you cut kids' hair?": "Yes, we offer children's haircuts.",
};

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([
      ...messages,
      userMessage,
      { text: "Typing.......", sender: "bot" },
    ]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const botResponse =
        commonQuestions[input] || "I don't understand. Can you tell me more?";
      const botMessage = { text: botResponse, sender: "bot" };
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages.pop(); // Remove the loading message
        return [...newMessages, botMessage];
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleClose = () => {
    setMessages([]);
    setInput("");
    setIsLoading(false);
    onClose();
  };

  const refreshChat = () => {
    setMessages([]);
    setInput("");
  };

  return (
    <div className={`chat-container ${isOpen ? "open" : ""}`}>
      <div className="chat-header">
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
        <button className="refresh-button" onClick={refreshChat}>
          Refresh
        </button>
      </div>
      <div className="chat-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Question?..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};
export default Chatbot;
