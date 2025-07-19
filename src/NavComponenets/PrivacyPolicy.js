import React from "react";
import { Container, Typography, Card, CardContent, Box, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";
import privacyImage from "../assets/Privacy.webp";
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserShield, 
  FaFileSignature, 
  FaCookieBite, 
  FaDatabase, 
  FaUserCog, 
  FaGlobe, 
  FaEnvelope 
} from "react-icons/fa";
import SEO from "../components/Seo";

// Last updated date
const lastUpdated = "May 13, 2025";

// Expanded privacy policy data
const privacyData = [
  {
    title: "1. Personal Information Collection",
    content: "We collect your personal data only when necessary, such as for bookings, customer support, or to improve our services. This may include your name, contact information, payment details, and travel preferences.",
    icon: <FaUserShield className="privacy-icon" />
  },
  {
    title: "2. Data Security Measures",
    content: "We implement strong security measures including encryption, secure servers, and regular security audits to protect your data from unauthorized access, alteration, disclosure, or destruction.",
    icon: <FaLock className="privacy-icon" />
  },
  {
    title: "3. How We Use Your Information",
    content: "We use your information to process bookings, provide customer support, improve our services, send relevant communications, and comply with legal obligations. We will never use your data for purposes other than those stated without your consent.",
    icon: <FaDatabase className="privacy-icon" />
  },
  {
    title: "4. Third-Party Sharing",
    content: "We do not sell or share your data with third parties without your consent, except when required for service provision (such as with drivers for your booking) or for legal purposes. Our partners are bound by strict confidentiality agreements.",
    icon: <FaFileSignature className="privacy-icon" />
  },
  {
    title: "5. Cookies & Tracking",
    content: "We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.",
    icon: <FaCookieBite className="privacy-icon" />
  },
  {
    title: "6. Your Privacy Rights",
    content: "You have the right to access, correct, delete, or transfer your personal data. You may also withdraw consent or object to certain processing. Contact us to exercise these rights.",
    icon: <FaUserCog className="privacy-icon" />
  },
  {
    title: "7. International Data Transfers",
    content: "Your information may be transferred and processed in countries outside your residence. We ensure appropriate safeguards are in place to protect your data in accordance with this policy.",
    icon: <FaGlobe className="privacy-icon" />
  },
  {
    title: "8. Policy Updates",
    content: "We may update our privacy policies to reflect changes in our practices or legal requirements. Users will be notified of any major changes via email or website notice.",
    icon: <FaShieldAlt className="privacy-icon" />
  }
];

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Your Data Protection Rights & Our Commitment"
        description="Learn how we collect, use, and protect your personal information. Our comprehensive privacy policy explains your rights and our data handling practices."
        keywords="privacy policy, data protection, personal information, cookies policy, GDPR compliance, data security"
      />
      
      <Container maxWidth="2xl">
        {/* HEADER SECTION */}
        <motion.div 
          className="privacy-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box className="privacy-header-container">
            <Box className="privacy-text">
              <Typography variant="h3" className="privacy-title">
                Privacy Policy
              </Typography>
              <Typography variant="h6" className="privacy-subtitle">
                Your privacy is our top priority. Learn how we protect your data.
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Last Updated: {lastUpdated}
              </Typography>
            </Box>
            <img src={privacyImage} alt="Privacy Policy Illustration" className="privacy-image" />
          </Box>
        </motion.div>

        {/* INTRODUCTION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="body1" paragraph>
                This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of our transportation services.
              </Typography>
              <Typography variant="body1" paragraph>
                We are committed to protecting your personal information and your right to privacy. When you use our services, you trust us with your information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* QUICK POLICY HIGHLIGHTS SECTION */}
        <motion.div 
          className="privacy-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
            Key Privacy Points
          </Typography>
          <Grid container spacing={4}>
            {privacyData.slice(0, 4).map((highlight, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card className="highlight-card" sx={{ height: '100%' }}>
                  <CardContent>
                    {highlight.icon}
                    <Typography variant="h6" className="highlight-title">
                      {highlight.title}
                    </Typography>
                    <Typography className="highlight-content">
                      {highlight.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* DETAILED PRIVACY POLICY SECTION */}
        <Box className="privacy-section" sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
            Detailed Privacy Policy
          </Typography>
          
          {privacyData.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="privacy-card" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h5" className="privacy-heading" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {policy.icon} {policy.title}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography className="privacy-content">
                    {policy.content}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: privacyData.length * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="privacy-card" sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h5" className="privacy-heading" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <FaEnvelope className="privacy-icon" /> 9. Contact Us
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography className="privacy-content" paragraph>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer:
                </Typography>
                <Typography className="privacy-content" sx={{ fontWeight: 'bold' }}>
                  Email: indoreairportcabooking@gmail.com<br />
                  Phone: +91 99937 90005<br />
                  Address: Yashwant Palaza in front of Railway Station , Choti Gwaltoli, indore, Madhya Pradesh, 452016
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* ACCEPTANCE OF TERMS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (privacyData.length + 1) * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="privacy-card">
              <CardContent>
                <Typography variant="body1" paragraph>
                  By using our services, you acknowledge that you have read and understood this Privacy Policy. Your continued use of our services constitutes your acceptance of these terms.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Last Updated: {lastUpdated}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
