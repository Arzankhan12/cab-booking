import React from "react";
import "../App.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

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
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* About Us Section */}
            <div className="col-md-3 pb-4 pb-md-0">
              <h5>About Us</h5>
              <p>
                We are committed to providing the best services to our
                customers. Our goal is to offer reliable and affordable booking
                solutions.{" "}
                <span className="read-more">
                  <Link to="/about-us"> Read more... </Link>
                </span>
              </p>

              <h6 className="pt-1">Follow Us</h6>
              <a
                href="https://www.instagram.com/indoreairportcabbooking?igsh=MTliMnZiajI2eDBvaA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
            </div>

            {/* Company Section */}
            <div className="col-md-3 pb-2 pb-md-0">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/inquiry">Inquiry</Link>
                </li>
                <li>
                  <Link to="/FAQ">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="col-md-3 pb-2 pb-md-0">
              <h5>Services</h5>
              <ul>
                <li>
                  <Link to="/booking">Booking</Link>
                </li>
                <li>
                  <Link to="/packages">Packages</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/TermAndCondition">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/PrivacyPolicy">Privacy and Policys</Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <div className="contact-item">
                <FaMapMarkerAlt size={20} />
                <span style={{ maxWidth: "88%" }}>
                  Yashwant Palaza in front of Railway Station , Choti Gwaltoli, indore, Madhya Pradesh, 452016
                </span>
              </div>
              <div className="contact-item" style={{ lineBreak: "anywhere", cursor: "pointer" }} onClick={handleMail}>
                <FaEnvelope size={20} /> indoreairportcabooking@gmail.com
              </div>
              <div className="contact-item" onClick={handleCallUs} style={{ cursor: "pointer" }}>
                <FaPhone size={20} />
                <span style={{ maxWidth: "88%" }}> +91 9993790005 </span>
              </div>
              <div className="contact-item" style={{ lineBreak: "anywhere"}}>
                <FaGlobe size={20} /> www.indoreairportcabbooking.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
