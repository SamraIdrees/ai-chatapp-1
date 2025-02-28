import React, { useContext, useState } from "react";
import "./Chat.css";
import gptLogo from "../assets/chatgpt.svg";
import addBtn from "../assets/add-30.png";
import msgIcon from "../assets/message.svg";
import saved from "../assets/bookmark.svg";
import rocket from "../assets/rocket.svg";
import sendBtn from "../assets/send.svg";
import userIcon from "../assets/user-icon.png";
import Career from "../assets/Career.png";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/Context";
import { GEMINI_API_URL, GEMINI_API_KEY } from "../config/gemini";

const Chat = () => {
  const { chats, addChat } = useContext(ChatContext); // Use context for chat history
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    addChat("user", input);

    try {
      const response = await fetch(`${GEMINI_API_URL}/recommendations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GEMINI_API_KEY}`,
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();

      if (data?.message) {
        // Add bot response to chat
        addChat("bot", data.message);
      } else {
        addChat("bot", "Sorry, I couldn't process your request.");
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      addChat("bot", "An error occurred. Please try again later.");
    }
  
    setInput(""); // Clear input field
  };

  return (
    <div className="Chat">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={Career} alt="" className="logo" />
            <span className="brand">CareerIT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <div className="recent">
              <button className="query-recent-title">
                <img src={msgIcon} alt="Query" />
                Recent
              </button>
              <button className="query">
                <img src={msgIcon} alt="Query" />
                What excites you most about technology? (e.g. coding, hardware,
                AI, cybersecurity)
              </button>
              <button className="query">
                <img src={msgIcon} alt="Query" />
                Do you enjoy problem-solving or creating new solutions?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <Link to="/itfields" className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            IT Fields
          </Link>
          <Link to="/universities" className="listItems">
            <img src={rocket} alt="Rocket" className="listItemsImg" />
            Universities
          </Link>
          
          <Link to="/itcourses" className="listItems">
            <img src={rocket} alt="Rocket" className="listItemsImg" />
            IT Courses
          </Link>
          <Link to="/resumeguidance" className="listItems">
            <img src={rocket} alt="Rocket" className="listItemsImg" />
            ResumeGuidance
          </Link>
         
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {chats.map((chat, index) => (
            <div className={`chat ${chat.sender === "bot" ? "bot" : ""}`} key={index}>
              <img
                className="chatImg"
                src={chat.sender === "bot" ? Career : userIcon}
                alt=""
              />
              <p className="txt">{chat.message}</p>
            </div>
          ))}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>This site can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;