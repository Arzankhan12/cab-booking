import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { FaPhone, FaWhatsapp, FaRupeeSign, FaSnowflake, FaRegWindowClose, FaUsers, FaClock, FaRoad, FaImage } from "react-icons/fa";
import { isBrowser } from "../utils/browserDetection";

// Safe window access
const handleChatUs = () => {
  if (!isBrowser()) return;
  const message = `Hi! I want to Book a CAB`;
  window.open(
    `https://wa.me/+919993790005?text=${encodeURIComponent(message)}`
  );
};

const handleCallUs = () => {
  if (!isBrowser()) return;
  window.location.href = "tel:+919993790005";
};

const icons = [FaRupeeSign, FaSnowflake, FaRegWindowClose, FaUsers, FaClock, FaRoad];

const CarCard = ({ car }) => {
  const [imageError, setImageError] = useState(false);
  
  // Fix image path if needed
  const getImagePath = (imagePath) => {
    // If it's already an absolute URL, return as is
    if (imagePath.startsWith('http')) return imagePath;
    
    // If it starts with ./ or ../, make it relative to public folder
    if (imagePath.startsWith('./') || imagePath.startsWith('../')) {
      return imagePath.replace(/^\.\//, '/');
    }
    
    // Otherwise, assume it's relative to public folder
    return `/${imagePath}`;
  };
  
  // Handle image load error
  const handleImageError = () => {
    console.error(`Failed to load image: ${car.image}`);
    setImageError(true);
  };
  
  // Determine if animations should be enabled
  const enableAnimations = isBrowser();
  
  return (
    <motion.div
      className="card"
      initial={enableAnimations ? { opacity: 0, y: 15 } : {}}
      whileInView={enableAnimations ? { opacity: 1, y: 0 } : {}}
      transition={enableAnimations ? { duration: 0.05, ease: "easeOut" } : {}}
      viewport={enableAnimations ? { once: true, amount: 0.05 } : {}}
    >
      {imageError ? (
        <div className="car-image image-fallback">
          <FaImage size={50} />
          <p>{car.title}</p>
        </div>
      ) : (
        <motion.img 
          src={getImagePath(car.image)} 
          alt={`${car.title} - Airport Cab Service in Indore`} 
          className="car-image"
          initial={enableAnimations ? { opacity: 0, scale: 0.9 } : {}}
          whileInView={enableAnimations ? { opacity: 1, scale: 1 } : {}}
          transition={enableAnimations ? { duration: 0.4, delay: 0.1 } : {}}
          loading="lazy"
          onError={handleImageError}
        />
      )}

      {/* Rest of the component remains the same */}
      <motion.h2 
        className="car-title"
        initial={enableAnimations ? { opacity: 0, y: -10 } : {}}
        whileInView={enableAnimations ? { opacity: 1, y: 0 } : {}}
        transition={enableAnimations ? { duration: 0.3, delay: 0.2 } : {}}
      >
        {car.title}
      </motion.h2>

      <motion.ul 
        className="car-description"
        initial={enableAnimations ? { opacity: 0, y: 10 } : {}}
        whileInView={enableAnimations ? { opacity: 1, y: 0 } : {}}
        transition={enableAnimations ? { duration: 0.3, delay: 0.2 } : {}}
      >
        {car.details.map((detail, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <li key={index} className="car-detail-item">
              <IconComponent className="detail-icon" /> {detail}
            </li>
          );
        })}
      </motion.ul>

      <motion.div 
        className="button-container"
        initial={enableAnimations ? { opacity: 0 } : {}}
        whileInView={enableAnimations ? { opacity: 1 } : {}}
        transition={enableAnimations ? { duration: 0.3, delay: 0.3 } : {}}
      >
        <motion.button
          className="call-button"
          onClick={handleCallUs}
          whileHover={enableAnimations ? { scale: 1.05, transition: { duration: 0.1 } } : {}}
          whileTap={enableAnimations ? { scale: 0.95, transition: { duration: 0.1 } } : {}}
        >
          <FaPhone className="button-icon" />
          Call Us
        </motion.button>

        <motion.button
          className="chat-button"
          onClick={handleChatUs}
          whileHover={enableAnimations ? { scale: 1.1 } : {}}
          whileTap={enableAnimations ? { scale: 0.9 } : {}}
        >
          <FaWhatsapp className="button-icon" />
          Chat Us
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CarCard;