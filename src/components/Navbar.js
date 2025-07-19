import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import animations
import { FaBars } from "react-icons/fa";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { FaTaxi, FaCar } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close Menu Instantly on Click
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
      <Link to="/" className="logo-link"> 
        <div className="logo">
         <img src="/images/logo.jpg" alt="Website Logo" className="logo-img" />
          <span>INDORE AIRPORT CAB BOOKING</span>
        </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <FaBars size={24} />
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/about-us" ? "active" : ""}>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className={location.pathname === "/booking" ? "active" : ""}>
            <Link to="/booking">Booking</Link>
          </li>
          <li className={location.pathname === "/packages" ? "active" : ""}>
            <Link to="/packages">Packages</Link>
          </li>
          <li className={location.pathname === "/inquiry" ? "active" : ""}>
            <Link to="/inquiry">Inquiry</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="nav-links-mobile">
                <li className={location.pathname === "/" ? "active" : ""} onClick={closeMobileMenu}>
                  <Link to="/">
                    <AiOutlineHome className="indicator" />
                    <span>Home</span>
                  </Link>
                </li>
                <li className={location.pathname === "/about-us" ? "active" : ""} onClick={closeMobileMenu}>
                  <Link to="/about-us">
                    <FiUser className="indicator" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li className={location.pathname === "/booking" ? "active" : ""} onClick={closeMobileMenu}>
                  <Link to="/booking">
                    <FaTaxi className="indicator" />
                    <span>Booking</span>
                  </Link>
                </li>
                <li className={location.pathname === "/packages" ? "active" : ""} onClick={closeMobileMenu}>
                  <Link to="/packages">
                    <FaCar className="indicator" />
                    <span>Packages</span>
                  </Link>
                </li>
                <li className={location.pathname === "/inquiry" ? "active" : ""} onClick={closeMobileMenu}>
                  <Link to="/inquiry">
                    <MdOutlineSupportAgent className="indicator" />
                    <span>Inquiry</span>
                  </Link>
                </li>
                <li className={location.pathname === "/contact" ? "active" : ""} onClick={closeMobileMenu}>
                  <Link to="/contact">
                    <AiOutlinePhone className="indicator contactIcon" />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
