import * as React from "react";
import Chatbot from "./Chatbot";
import { useState } from "react";
import { IconButton } from "@mui/material";
import chatbotIc from "../../Assets/chatBotN.png";
import "./Chatbot.css";

const AlertDialogSlide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleChatbotClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}
      >
        <IconButton
          sx={{
            ml: 10,
            backgroundColor: "#E659A1",
            color: "#FFFFFF",
            padding: "5px 5px",
            borderRadius: "10px",
            fontSize: "18px",
            fontFamily: "Georgia, serif",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#C1448C",
            },
          }}
          onClick={toggleChatbot}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>Chat with Us</span>
            <img
              title="Chat with Us"
              src={chatbotIc}
              alt="Chatbot"
              style={{ width: "32px", height: "32px" }} // Set the size of the image
            />
          </div>
        </IconButton>
      </div>
      <Chatbot isOpen={isOpen} onClose={handleChatbotClose} />
    </>
  );
};
export default AlertDialogSlide;
