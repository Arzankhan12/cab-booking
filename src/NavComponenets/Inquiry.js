import SEO from "../components/Seo";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Inquiry.css";

const Inquiry = ({canonicalUrl}) => {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Full name is required")
      .matches(
        /^[a-zA-Z\s]+$/,
        "Full name can only contain letters and spaces"
      ),
    mobile_no: Yup.string()
      .required("Mobile number is required")
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    tripType: Yup.string().required("Trip type is required"),
    date: Yup.date()
      .required("Date is required")
      .min(new Date(), "Date cannot be in the past"),
    carType: Yup.string().required("Car type is required"),
    pickupLocation: Yup.string()
      .required("Pickup location is required")
      .min(3, "Pickup location must be at least 3 characters"),
    dropLocation: Yup.string()
      .required("Drop location is required")
      .min(3, "Drop location must be at least 3 characters"),
  });

  // Initialize EmailJS with your public key from environment variables
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitted(true);
    
    // Prepare email template parameters
    const templateParams = {
      from_name: values.username,
      from_email: values.email,
      phone: values.mobile_no,
      trip_type: values.tripType,
      date: values.date,
      car_type: values.carType,
      pickup: values.pickupLocation,
      drop: values.dropLocation,
      to_email: 'indoreairportcabooking@gmail.com' // Replace with your email
    };

    try {
      // Send email using EmailJS
      const emailResponse = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      if (emailResponse.status !== 200) {
        throw new Error('Email sending failed');
      }

      // Also send data to your existing API endpoint
      const apiResponse = await fetch(
        "https://indoreairportcabbooking.com/api/contactdetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (emailResponse.status === 200 && apiResponse.ok) {
        setSubmissionMessage(
          "Your query has been submitted successfully. We will get back to you soon."
        );
        resetForm();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error("Error:", error);
      let errorMessage = "Error submitting your query. Please try again later.";
      
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setSubmissionMessage(errorMessage);
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <>

    <SEO 
  title="Inquire About Indore Airport Cab Services | Get in Touch" 
  description="Have questions about our airport cab services? Fill out our inquiry form to get quick responses about our taxi services, pricing, and availability."
  keywords="airport pickup Indore, cab booking inquiries, taxi service questions, airport transfer inquiry, contact cab service"
  canonicalUrl={canonicalUrl}
/>
    <div>
      <div className="container mt-4 mb-3 mt-md-5">
        <div className="inquiry-section">
          <h2 className="text-center  mb-4" style={{ color: "#ff9800" }}>
            <i className="fas fa-taxi"></i> Cab Booking Inquiry
          </h2>
          <div className="inquiry-form mt-3 pl-3">
            <Formik
              initialValues={{
                username: "",
                mobile_no: "",
                email: "",
                tripType: "",
                date: "",
                carType: "",
                pickupLocation: "",
                dropLocation: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, handleBlur }) => (
                <Form>
                  <div className="row row-parent">
                    <div className="col-md-4 form-group">
                      <label>Full Name</label>
                      <Field
                        type="text"
                        name="username"
                        placeholder="Enter Full Name"
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="col-md-4 form-group">
                      <label>Mobile No.</label>
                      <Field
                        type="text"
                        name="mobile_no"
                        placeholder="Enter Mobile No."
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="mobile_no"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="col-md-4 form-group">
                      <label>Email Address</label>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Enter Email Address"
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>

                  <div className="row row-parent">
                    <div className="col-md-4 form-group">
                      <label>Trip Type</label>
                      <Field
                        as="select"
                        name="tripType"
                        className="form-select custom-select-height"
                      >
                        <option value="" disabled>
                          Select Trip Type
                        </option>
                        <option>Airport Transfer</option>
                        <option>Local</option>
                        <option>Oneway</option>
                        <option>Roundtrip</option>
                        <option>Tour Package</option>
                      </Field>
                      <ErrorMessage
                        name="tripType"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="col-md-4 form-group">
                      <label>Choose Date</label>
                      <Field
                        type="date"
                        name="date"
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="date"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="col-md-4 form-group">
                      <label>Car Type</label>
                      <Field
                        as="select"
                        name="carType"
                        className="form-select custom-select-height"
                      >
                        <option value="" disabled>
                          Select Car Type
                        </option>
                        <option>Swift</option>
                        <option>Innova</option>
                        <option>Ertiga</option>
                        <option>Tempotraveller</option>
                        <option>Tavera</option>
                      </Field>
                      <ErrorMessage
                        name="carType"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>

                  <div className="row row-parent">
                    <div className="col-md-4 form-group">
                      <label>Pickup Location</label>
                      <Field
                        type="text"
                        name="pickupLocation"
                        placeholder="Enter Pickup Location"
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="pickupLocation"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="col-md-4 form-group">
                      <label>Drop Location</label>
                      <Field
                        type="text"
                        name="dropLocation"
                        placeholder="Enter Drop Location"
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="dropLocation"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>

                  <div className="row row-parent-btn">
                    <div className="col-12 ">
                      <button
                        type="submit"
                        className="btn btn-primary w-20"
                        disabled={isSubmitted}
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {submissionMessage && (
        <div
          className={`alert ${
            submissionMessage.includes(
              "Your query has been submitted successfully. We will get back to you soon."
            )
              ? "alert-success"
              : "alert-danger"
          } alert-dismissible fade show mt-4`}
          role="alert"
        >
          {submissionMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
    </>
  );
};

export default Inquiry;
