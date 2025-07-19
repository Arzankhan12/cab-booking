import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

import Home from "./components/Home";
import AboutUs from "./NavComponenets/AboutUs";
import Booking from "./NavComponenets/Booking";
import Packages from "./NavComponenets/Packages";
import Inquiry from "./NavComponenets/Inquiry";
import Contact from "./NavComponenets/Contact";
import FAQ from "./NavComponenets/FAQ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingButton from "./components/FloatingButton";
import TermAndCondition from "./NavComponenets/TermAndCondition";
import PrivacyPolicy from "./NavComponenets/PrivacyPolicy";
import NotFound from "./NavComponenets/NotFound";
import ServiceDetails from "./NavComponenets/ServiceDetails"; // New component
import PackageDetails from "./NavComponenets/PackageDetails"; // New component


// Base URL for canonical URLs
const BASE_URL = "https://indoreairportcabbooking.com";
function App() {
  return (
    <HelmetProvider>
      <Router>
        <div id="root">
          <Header />
          <Navbar />
          <ScrollToTop />
          <FloatingButton />
          <div className="content">
          <Routes>
              <Route path="/" element={<Home canonicalUrl={`${BASE_URL}/`} />} />
              <Route path="/about-us" element={<AboutUs canonicalUrl={`${BASE_URL}/about-us`} />} />
              <Route path="/booking" element={<Booking canonicalUrl={`${BASE_URL}/booking`} />} />
              <Route path="/packages" element={<Packages canonicalUrl={`${BASE_URL}/packages`} />} />
              <Route path="/packages/:packageName" element={<PackageDetails canonicalUrl={`${BASE_URL}/packages`} />} />
              <Route path="/services/:serviceType" element={<ServiceDetails canonicalUrl={`${BASE_URL}/services`} />} />
              <Route path="/inquiry" element={<Inquiry canonicalUrl={`${BASE_URL}/inquiry`} />} />
              <Route path="/contact" element={<Contact canonicalUrl={`${BASE_URL}/contact`} />} />
              <Route path="/FAQ" element={<FAQ canonicalUrl={`${BASE_URL}/FAQ`} />} />
              <Route path="/TermAndCondition" element={<TermAndCondition canonicalUrl={`${BASE_URL}/TermAndCondition`} />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy canonicalUrl={`${BASE_URL}/PrivacyPolicy`} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;