import SEO from "../components/Seo";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const handleChatUs = () => {
  const message = `Hi! I want to Book a CAB`;
  window.open(
    `https://wa.me/+919993790005?text=${encodeURIComponent(message)}`
  );
};

const handleCallUs = () => {
  window.location.href = "tel:+919993790005";
};

function Contact({canonicalUrl}) {
  return (
    <>
    <SEO 
  title="Contact Indore Airport Cab Booking | 24/7 Customer Support" 
  description="Contact our 24/7 customer support for Indore airport cab bookings, inquiries, and assistance. We're always available to help with your transportation needs."
  keywords="contact cab service Indore, airport taxi contact, cab booking support, Indore taxi phone number, airport transfer help"
  canonicalUrl={canonicalUrl}
/>
    <div className="mb-3">
      <div className="contact-image-container">
        <img
          src="./images/rajwada.jpeg"
          alt="Contact Us"
          className="contact-image"
        />
        <h1 className="contact-text">Contact Us</h1>
      </div>

      <div className="contact-sections1">
        {/* Section 1: map */}
        <div className="contact-section">
          <a
            href="https://maps.app.goo.gl/GkEF39TyrHGF7oQk6"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaMapMarkerAlt className="contact-icons" />
            <h3>Our Location</h3>
            <p style={{ cursor: 'pointer', textDecoration: 'underline' }}>Yashwant Palaza in front of Railway Station , Choti Gwaltoli, indore, Madhya Pradesh, 452016</p>
          </a>
        </div>

        {/* Section 2: Phone */}
        <div className="contact-section" onClick={handleCallUs} style={{ cursor: 'pointer' }}>
          <FaPhone className="contact-icons" />
          <h3>Phone</h3>
          <p>+91 9993790005</p>
        </div>

        {/* Section 3: Email */}
        <div className="contact-section">
          <a href="mailto:indoreairportcabooking@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
            <FaEnvelope className="contact-icons" />
            <h3>Email</h3>
            <p>indoreairportcabooking@gmail.com</p>
          </a>
        </div>

        {/* Section 4: WhatsApp */}
        <div className="contact-section" onClick={handleChatUs} style={{ cursor: 'pointer' }}>
          <FaWhatsapp className="contact-icons" />
          <h3>WhatsApp</h3>
          <p>+91 9993790005</p>
        </div>
      </div>

      {/* Full-Width Map Section */}
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1233.8285728240694!2d75.86793487767032!3d22.718499400210742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd083493cf3%3A0x24b347ace2125163!2sYashwant%20plaza!5e0!3m2!1sen!2sin!4v1747121515751!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
