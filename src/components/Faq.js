import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Container, 
  Grid 
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";

const faqItems = [
  { id: "panel1", question: "Are there any subscription fees?", answer: "No, we do not charge any subscription fees." },
  { id: "panel2", question: "Do you share user data with third parties?", answer: "No, we value privacy and do not share data." },
  { id: "panel3", question: "How do I book a cab?", answer: "You can easily book a cab through our website by entering your pickup location, destination, and preferred time." },
  { id: "panel4", question: "What kind of customer support do you provide?", answer: "We provide dedicated customer support via chat and email from 9 AM to 9 PM to assist you with bookings and queries." },
  { id: "panel5", question: "What payment methods do you accept?", answer: "We accept cash and online payment methods like PhonePe and Google Pay." }
];

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* FAQ Image with Fade-in Animation */}
        <Grid item xs={12} md={5}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <Box sx={{ position: "relative", height: "100%", minHeight: "400px" }}>
              <Box
                component="img"
                src="images/faq.jpg"
                alt="FAQ illustration"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />
            </Box>
          </motion.div>
        </Grid>
        
        {/* FAQ Content */}
        <Grid item xs={12} md={7}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <Box>
              <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 1 }}>
                Frequently Asked Questions
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
                Questions you might ask about our products and services.
              </Typography>
              
              <Box>
                {faqItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: true }}
                  >
                    <Accordion
                      expanded={expanded === item.id}
                      onChange={handleChange(item.id)}
                      elevation={1}
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: "6px",
                        overflow: "hidden",
                        mb: 1
                      }}
                    >
                      <AccordionSummary
                        expandIcon={expanded === item.id ? 
                          <RemoveIcon sx={{ color: "#1976d2" }} /> : 
                          <AddIcon sx={{ color: "#1976d2" }} />
                        }
                        sx={{ 
                          backgroundColor: "background.paper",
                          "& .MuiAccordionSummary-content": { 
                            justifyContent: "space-between",
                            alignItems: "center"
                          }
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold" }}>{item.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{item.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Faq;
