import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const handleChatUs = (heading, price) => {
  const message = `Hi! I want to Book a CAB. Tour: ${heading}`;
  window.open(
    `https://wa.me/+919993790005?text=${encodeURIComponent(message)}`
  );
};

const Card = ({ image, heading, description, price }) => {
  return (
    <motion.div
      className="tourcard"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Image */}
      <motion.img 
        src={image} 
        alt={`${heading} - Tour Destination from Indore Airport`} 
        className="tourcard-image"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        loading="lazy" 
      />

      {/* Title */}
      <motion.h2 
        className="pt-2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {heading}
      </motion.h2>

      {/* Description */}
      <motion.p 
        className="tour-description"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {description}
      </motion.p>

      {/* Price */}
      <motion.p 
        className="tourprice"
        dangerouslySetInnerHTML={{ __html: price }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      {/* Book Now Button */}
      <motion.button
        className="tourbook-now"
        onClick={() => handleChatUs(heading, price)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

export default Card;
