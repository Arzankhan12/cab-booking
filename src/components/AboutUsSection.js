import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaClock, FaShieldAlt, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import "../styles/AboutUsSection.css";
import aboutus from "../assets/about-us.png";


const AboutUsSection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-us-section">
      <div className="about-us-bg-pattern"></div>
      
      <div className="about-us-container">
        <motion.div 
          className="about-us-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="about-us-subtitle">About Us</span>
          <h2 className="about-heading">Your Trusted Airport Transfer Partner</h2>
          <div className="about-divider"></div>
        </motion.div>
        
        <div className="about-us-content-wrapper">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-image-container">
              <img 
                src="/images/about-us-cab.jpg" 
                alt="Indore Airport Cab Service" 
                className="about-image"
                onError={(e) => {
                  e.target.src = aboutus;
                }}
              />
              <div className="about-image-accent"></div>
            </div>
            <div className="about-experience-badge">
              <span className="experience-number">5+</span>
              <span className="experience-text">Years of Experience</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="about-text-content">
              <p className="about-text">
                Welcome to <strong>Indore Airport Cab Booking</strong>, the premier airport transfer service in Indore. 
                With over 5 years of experience, we've built our reputation on reliability, punctuality, and exceptional customer service.
              </p>
              <p className="about-text">
                Our mission is to provide safe, comfortable, and affordable transportation solutions for travelers 
                to and from Devi Ahilyabai Holkar Airport and popular destinations around Indore including Ujjain, 
                Omkareshwar, Maheshwar, and Mandav.
              </p>
              
              <motion.div 
                className="about-features"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="feature" variants={itemVariants}>
                  <div className="feature-icon">
                    <FaClock size={22} />
                  </div>
                  <div className="feature-text">
                    <h4>24/7 Service</h4>
                    <p>Available round-the-clock for your convenience</p>
                  </div>
                </motion.div>
                
                <motion.div className="feature" variants={itemVariants}>
                  <div className="feature-icon">
                    <FaShieldAlt size={22} />
                  </div>
                  <div className="feature-text">
                    <h4>Safe & Reliable</h4>
                    <p>Professional drivers and well-maintained vehicles</p>
                  </div>
                </motion.div>
                
                <motion.div className="feature" variants={itemVariants}>
                  <div className="feature-icon">
                    <FaMapMarkerAlt size={22} />
                  </div>
                  <div className="feature-text">
                    <h4>Local Expertise</h4>
                    <p>Knowledgeable drivers familiar with all routes</p>
                  </div>
                </motion.div>
                
                <motion.div className="feature" variants={itemVariants}>
                  <div className="feature-icon">
                    <FaUserTie size={22} />
                  </div>
                  <div className="feature-text">
                    <h4>Professional Service</h4>
                    <p>Courteous and trained chauffeurs at your service</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about-us" className="about-btn">
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;