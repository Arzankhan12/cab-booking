import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaPlus } from "react-icons/fa";
import "../styles/FloatingButton.css";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCallUs = () => {
    window.location.href = "tel:+919993790005";
  };

  const handleChatUs = () => {
    const message = `Hi! I want to Book a CAB`;
    window.open(
      `https://wa.me/+919993790005?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="floating-button-container">
      {isOpen && (
        <div className="floating-options">
          <button className="floating-option" onClick={handleCallUs}>
            <FaPhone />
          </button>
          <button className="floating-option" onClick={handleChatUs}>
            <FaWhatsapp />
          </button>
        </div>
      )}
      <button
        className={`floating-button ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default FloatingButton;
