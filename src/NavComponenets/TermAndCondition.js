import React, { useState, useRef } from "react";
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Box, 
  List, 
  ListItem, 
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import termsImage from "../assets/T&C.webp";
import SEO from "../components/Seo";

// Expanded terms data with more comprehensive content
const termsData = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: "Welcome to our airport taxi service. By accessing or using our website, mobile application, or any of our services, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding with any booking or service usage. If you disagree with any part of these terms, please refrain from using our services."
  },
  {
    id: "definitions",
    title: "2. Definitions",
    content: "In these Terms and Conditions, 'we', 'our', or 'us' refers to the airport taxi service provider. 'You' or 'your' refers to the user or customer of our services. 'Service' refers to the transportation services we provide, including airport pickups, drop-offs, and related services."
  },
  {
    id: "service-usage",
    title: "3. Service Usage",
    content: "Our services are primarily intended for personal transportation needs. Any unauthorized commercial use is strictly prohibited. You agree to use our services only for lawful purposes and in accordance with these Terms. We reserve the right to refuse service to anyone for any reason at any time."
  },
  {
    id: "booking-payments",
    title: "4. Booking & Payments",
    content: "All bookings must be confirmed in advance through our website, mobile application, or customer service. Payments can be made through our secure online payment system, credit/debit cards, or cash upon completion of the service. Prices are subject to change without notice. Additional charges may apply for waiting time, extra stops, or services requested beyond the original booking."
  },
  {
    id: "cancellation-policy",
    title: "5. Cancellation Policy",
    content: "Cancellations must be made at least 24 hours before the scheduled pickup time to avoid charges. Late cancellations (less than 24 hours before scheduled time) may incur a cancellation fee of up to 50% of the total fare. No-shows will be charged the full fare amount. In case of unforeseen circumstances or emergencies, please contact our customer service as soon as possible."
  },
  {
    id: "user-responsibilities",
    title: "6. User Responsibilities",
    content: "You are responsible for providing accurate pickup and drop-off information. You must be present at the designated pickup location at the scheduled time. You agree to maintain appropriate behavior during the ride and comply with all safety instructions provided by the driver. Any damage to the vehicle caused by you will be your financial responsibility."
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    content: "All content on our website and mobile application, including but not limited to text, graphics, logos, images, and software, is the property of our company and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our explicit written permission."
  },
  {
    id: "privacy-policy",
    title: "8. Privacy Policy",
    content: "We respect your privacy and are committed to protecting your personal information. Our Privacy Policy explains how we collect, use, and safeguard your data. By using our services, you consent to the collection and use of information as described in our Privacy Policy, which is incorporated by reference into these Terms and Conditions."
  },
  {
    id: "liability",
    title: "9. Liability & Limitations",
    content: "We strive to provide reliable and safe transportation services. However, we are not responsible for any lost items, personal damages, or inconveniences during the ride. Our liability is limited to the fare amount paid for the specific ride in question. We are not liable for any indirect, incidental, special, or consequential damages arising from the use of our services."
  },
  {
    id: "force-majeure",
    title: "10. Force Majeure",
    content: "We shall not be liable for any failure to perform our obligations where such failure is a result of acts of nature (including fire, flood, earthquake, storm, or other natural disaster), war, invasion, act of foreign enemies, hostilities, civil war, rebellion, revolution, insurrection, military coup, or traffic conditions beyond our reasonable control."
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction."
  },
  {
    id: "changes-to-terms",
    title: "12. Changes to Terms",
    content: "We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms."
  }
];

const TermAndCondition = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(false);
  const sectionRefs = useRef({
    introduction: React.createRef(),
    definitions: React.createRef(),
    service_usage: React.createRef(),
    booking_payments: React.createRef(),
    cancellation_policy: React.createRef(),
    user_responsibilities: React.createRef(),
    intellectual_property: React.createRef(),
    privacy_policy: React.createRef(),
    liability: React.createRef(),
    force_majeure: React.createRef(),
    governing_law: React.createRef(),
    changes_to_terms: React.createRef()
  });

  // Initialize refs for each section
  React.useEffect(() => {
    termsData.forEach(term => {
      sectionRefs.current[term.id] = React.createRef();
    });
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id].current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SEO 
        title="Terms and Conditions | Airport Taxi Service"
        description="Read our comprehensive terms and conditions for using our airport taxi service. Learn about bookings, cancellations, payments, and more."
        keywords="terms and conditions, airport taxi, taxi service terms, cancellation policy, booking terms"
      />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* HEADER SECTION */}
        <motion.div 
          className="terms-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Box 
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 4,
              gap: 3
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="h3" 
                component="h1"
                sx={{
                  fontFamily: '"Philosopher", Sans-serif',
                  fontWeight: 700,
                  mb: 2
                }}
              >
                Terms & Conditions
              </Typography>
              <Typography variant="h6" sx={{ color: '#555', mb: 2 }}>
                Please read our terms carefully before using our services.
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </Typography>
            </Box>
            <Box sx={{ 
              flex: isMobile ? 1 : 0.5, 
              textAlign: isMobile ? 'center' : 'right',
              maxWidth: isMobile ? '100%' : '300px'
            }}>
              <img 
                src={termsImage} 
                alt="Terms & Conditions" 
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }} 
              />
            </Box>
          </Box>
        </motion.div>

        {/* TABLE OF CONTENTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card sx={{ mb: 4, backgroundColor: '#f8f9fa' }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Table of Contents
              </Typography>
              <List dense>
                {termsData.map((term, index) => (
                  <ListItem 
                    button 
                    key={index} 
                    onClick={() => scrollToSection(term.id)}
                    sx={{ 
                      borderLeft: '3px solid transparent',
                      '&:hover': {
                        borderLeft: '3px solid #3f51b5',
                        backgroundColor: 'rgba(63, 81, 181, 0.08)'
                      }
                    }}
                  >
                    <ListItemText primary={term.title} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </motion.div>

        {/* TERMS SECTION - DESKTOP VERSION */}
        {!isMobile && (
          <Box className="terms-section">
            {termsData.map((term, index) => (
              <motion.div
                key={index}
                ref={sectionRefs.current[term.id]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card 
                  sx={{ 
                    mb: 3, 
                    borderLeft: '4px solid #3f51b5',
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardContent>
                    <Typography 
                      variant="h5" 
                      id={term.id}
                      sx={{ 
                        mb: 2, 
                        fontWeight: 600,
                        color: '#333'
                      }}
                    >
                      {term.title}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography 
                      variant="body1"
                      sx={{ 
                        lineHeight: 1.7,
                        color: '#555'
                      }}
                    >
                      {term.content}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        )}

        {/* TERMS SECTION - MOBILE VERSION (ACCORDIONS) */}
        {isMobile && (
          <Box className="terms-section-mobile">
            {termsData.map((term, index) => (
              <motion.div
                key={index}
                ref={sectionRefs.current[term.id]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                sx={{ mb: 2 }}
              >
                <Accordion 
                  expanded={expanded === `panel${index}`} 
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    borderLeft: expanded === `panel${index}` ? '4px solid #3f51b5' : '1px solid #e0e0e0',
                    mb: 1
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography sx={{ fontWeight: 600 }}>{term.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ lineHeight: 1.7, color: '#555' }}>
                      {term.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        )}

        {/* FINAL NOTES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Typography variant="body1">
              If you have any questions about these Terms and Conditions, please contact us through our website or customer service.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </>
  );
};

export default TermAndCondition;
