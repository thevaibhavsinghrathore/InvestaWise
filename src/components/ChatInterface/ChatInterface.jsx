import React, { useState, useRef, useEffect } from "react";
import "./ChatInterface.css";
import { FiSend } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI financial assistant. How can I help you today?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Initialize without auto-scroll on first render
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Only auto-scroll for new messages after initial load
    if (!initialLoad) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setInitialLoad(false);
    }
  }, [messages]);

  // Reset scroll position on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      
      setTimeout(() => {
        const responses = [
          "That's a great question about investing! Based on market conditions...",
          "For that trading strategy, I'd recommend considering...",
          "From a risk management perspective, you should...",
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, { text: randomResponse, sender: "ai" }]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container" ref={chatContainerRef}>
      <div className="chat-header">
        <div className="ai-icon">
          <BsRobot size={24} />
        </div>
        <h3>Financial Assistant</h3>
        <div className="status-indicator"></div>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "ai"}`}
          >
            {msg.sender === "ai" && (
              <div className="message-icon">
                <BsRobot size={18} />
              </div>
            )}
            <div className="message-content">
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about stocks, trading, or investments..."
          className="chat-input"
        />
        <button onClick={handleSend} className="send-button">
          <FiSend size={18} />
        </button>
      </div>
    </div>
  );
}