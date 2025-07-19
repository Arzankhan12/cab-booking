import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import faqImage from "../assets/about1.webp"; // Replace with your image
import Faq from "../components/Faq"; // Separate FAQ section component

const FAQ = () => {
  return (
    <Container maxWidth="2xl">
      {/* HEADER SECTION */}
      <motion.div
        className="faq-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Box className="faq-header-container">
          <Box className="faq-text">
            <Typography variant="h3" className="faq-title">
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" className="faq-subtitle">
              Find answers to your common questions here!
            </Typography>
          </Box>
          <img src={faqImage} alt="FAQ" className="faq-image" />
        </Box>
      </motion.div>

      {/* FAQ SECTION */}
      <Faq />
    </Container>
  );
};

export default FAQ;
