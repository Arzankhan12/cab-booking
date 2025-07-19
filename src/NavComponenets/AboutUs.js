import SEO from "../components/Seo";
import React from "react";
import { motion } from "framer-motion";
import { FaMoneyCheckAlt, FaUserAstronaut, FaUserTie } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import CarouselComponent from "../components/CarouselComponent";
import visionImage from "../assets/about1.webp";

function AboutUs({canonicalUrl}) {
  return (
    <>
<SEO 
  title="About Indore Airport Cab Booking | Trusted Taxi Services in Indore" 
  description="Learn about our reliable and trusted airport taxi services in Indore. Professional drivers, clean vehicles, and 24/7 availability for all your transportation needs."
  keywords="Indore taxi service, about us, cab company Indore, reliable airport transfers, airport cab service history"
  canonicalUrl={canonicalUrl}
/>
    <motion.div
      className="about-main"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Page Heading */}
      <motion.h1
        className="booking-heading text-center text-decoration-underline"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Us
      </motion.h1>

      {/* About Section */}
      <motion.div
        className="about-container"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="image-about-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src="images/t2.avif" alt="Innova Car" className="about-image" />
        </motion.div>

        <motion.div
          className="text-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="about-heading">INDORE AIRPORT CAB BOOKING</h2>
          <h3 className="about-subheading">
            KNOW MORE ABOUT INDORE AIRPORT CAB SERVICE?
          </h3>
          <p className="about-paragraph">
          Our taxi services offer the best features for a comfortable and
            convenient journey. Enjoy clean and spacious vehicles, prompt
            pickups, and affordable rates, ensuring a reliable and hassle-free
            travel experience.Our taxi services offer the best features for a
            comfortable and convenient journey. Enjoy clean and spacious
            vehicles, prompt pickups, and affordable rates, ensuring a reliable
            and hassle-free travel experience.Our taxi services offer the best
            features for a comfortable and convenient journey. Enjoy clean and
            spacious vehicles, prompt pickups, and affordable rates, ensuring a
            reliable and hassle-free travel experience.Our taxi services offer
            the best features for a comfortable and convenient journey. Enjoy
            clean and spacious vehicles, prompt pickups, and affordable rates,
            ensuring a reliable and hassle-free travel experience.
          </p>
        </motion.div>
      </motion.div>

      {/* Feature Section */}
      <motion.div
        className="feature-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          { icon: <FaRegClock  className="feature-image"/>, title: "On-Time Pickups", desc: "Count on us for punctual pickups every time." },
          { icon: <FaMoneyCheckAlt  className="feature-image"/>, title: "Affordable Rides", desc: "We offer competitive rates without hidden fees." },
          { icon: <FaUserTie  className="feature-image"/>, title: "Experienced Local Drivers", desc: "Our drivers provide stress-free travel experiences." },
          { icon: <FaUserAstronaut  className="feature-image"/>, title: "Flexible Booking Options", desc: "We offer a range of booking choices for convenience." }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="feature-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {feature.icon}
            <h4 className="feature-heading">{feature.title}</h4>
            <p className="feature-description">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="vision-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="vision-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="vision-heading">OUR VISION</h2>
          <p className="vision-description">
            Our vision is to become the most reliable and preferred cab service
            provider in Indore, offering seamless, safe, and enjoyable journeys.
          </p>
        </motion.div>

        <motion.div
          className="vision-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={visionImage}
            alt="Our Vision"
            className="vision-image"
            height={600}
            width={600}
          />
        </motion.div>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <CarouselComponent />
      </motion.div>
    </motion.div>
    </>
  );
}

export default AboutUs;
