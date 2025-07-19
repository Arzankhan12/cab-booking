import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Header = () => {

  const handleMail = () => {
    const subject = "Cab Booking Inquiry";
    const body = "Hi! I want to Book a CAB.";
    const email = "indoreairportcabooking@gmail.com"; // Replace with your actual email
  
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  const handleCallUs = () => {
    window.location.href = "tel:+919993790005";
  };

  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -20 }} // Start above the screen
      animate={{ opacity: 1, y: 0 }} // Smooth drop-in
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Section - Contact Info */}
      <motion.div 
        className="left"
        initial={{ opacity: 0, x: -50 }} // Slide from left
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src="../images/email.png" alt="Email Icon" className="icon emailicon" />
        <motion.span 
          className="email displaynone"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={handleMail}
        >
          indoreairportcabooking@gmail.com
        </motion.span>

        <img src="/images/phone.png" alt="Phone Icon" className="icon phoneicon" />
        <motion.span 
          className="phone displaynone"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={handleCallUs}
        >
          | +91 9993790005
        </motion.span>
      </motion.div>

      {/* Right Section - Social Media Icons */}
      <motion.div 
        className="right"
        initial={{ opacity: 0, x: 50 }} // Slide from right
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {[
          { href: "https://twitter.com", src: "/images/twitter.png", alt: "Twitter Icon" },
          { href: "https://www.instagram.com/indoreairportcabbooking?igsh=MTliMnZiajI2eDBvaA==", src: "/images/instagram.png", alt: "Instagram Icon" },
          { href: "https://facebook.com", src: "/images/facebook1.png", alt: "Facebook Icon" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }} // Hover effect
            whileTap={{ scale: 0.9 }} // Click effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={item.src} alt={item.alt} className="icon" />
          </motion.a>
        ))}
      </motion.div>
    </motion.header>
  );
};

export default Header;
