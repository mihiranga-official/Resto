import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaymentDetails from "../Payment/PaymentDetails";
import Logo from "../../../src/Assets/Lillylogo.png";
import Paid from "../../../src/Assets/paid.jpg";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { selectBookingData } from "../redux/BookingDataSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { jsPDF } from "jspdf";
import PaymentIcon from '@mui/icons-material/Payment';

const steps = ["Finalize the booking"];

const CheckOut = () => {
  const navigate = useNavigate();
  const bookingData = useSelector(selectBookingData);

  const [emailSent, setEmailSent] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: bookingData?.Name || "",
    phone: bookingData?.Phone || "",
    email: bookingData?.Email || "",
    service: bookingData?.Service || "",
    time: bookingData?.Time || "",
    notes: bookingData?.Notes || "",
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [activeStep, setActiveStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const templateParams = {
      to_name: formData.name,
      from_name: "Team Lilly", // Change this to the sender's name
      message: `\nThank you for your booking!\n\nService: ${formData.service}
      "Paid"\nTime: ${formData.time}\nNotes: ${formData.notes}`,
    };

    emailjs
      .send(
        "service_4znnwsv",
        "template_hnyvwlg",
        templateParams,
        "p1o5gsUrkYNjJOGwp"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        //setEmailSent(true);
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle error
      });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Set document properties
    doc.setProperties({
      title: "Booking Confirmation",
      subject: "Booking Details",
      author: "Team Lilly",
      keywords: "booking, confirmation",
    });
    // Add the logo
    const logoWidth = 42; // Adjust the width of the logo
    const logoHeight = 17; // Adjust the height of the logo
    const marginLeft = 10; // Define the left margin
    const marginTop = 3; // Define the top margin
    doc.addImage(Logo, "PNG", marginLeft, marginTop, logoWidth, logoHeight);

    // Add header
    doc.setFontSize(18);
    doc.setFont("Georgia");
    doc.text("Booking Confirmation", 105, 20, null, null, "center");

    // Add horizontal line
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    // Set font size for content
    doc.setFontSize(12);

    // Add booking details with some styling
    const startX = 20;
    let startY = 35;
    const lineHeight = 10;

    const addText = (label, text) => {
      doc.setFont(undefined, "bold");
      doc.text(`${label}:`, startX, startY);
      doc.setFont(undefined, "normal");
      doc.text(text, startX + 40, startY);
      startY += lineHeight;
    };

    addText("Name", formData.name);
    addText("Phone", formData.phone);
    addText("Email", formData.email);
    addText("Service", formData.service);
    addText("Time", formData.time);
    addText("Notes", formData.notes);

    // Add footer
    doc.setLineWidth(0.5);
    doc.line(10, 280, 200, 280);
    doc.setFontSize(10);
    doc.text("Thank you for booking with us!", 105, 285, null, null, "center");
    doc.text(
      "Contact us at support@teamlilly.com",
      105,
      290,
      null,
      null,
      "center"
    );
   

    
     // Add the PaidLogo
     const PaidWidth = 42; // Adjust the width of the logo
     const PaidHeight = 17; // Adjust the height of the logo
     const PaidmarginLeft = 157; // Define the left margin
     const PaidmarginTop = 88; // Define the top margin
     doc.addImage(
       Paid,
       "PNG",
       PaidmarginLeft,
       PaidmarginTop,
       PaidWidth,
       PaidHeight
     );

    // Save the PDF
    doc.save("booking-confirmation.pdf");
  };

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      //handleSendEmail(); // Call the function to send email
      saveData(); // Call the function to save data
      generatePDF(); // Generate and download the PDF
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const saveData = async () => {
    setLoading(true);
    setMessage("Payment has been initiated with booking details...");

    const { Name, Phone, Email, Service, Date, Time, Notes } = bookingData;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Phone, Email, Service, Date, Time, Notes }),
    };

    let res;
    try {
      res = await fetch(
        "https://he-and-she-356f5-default-rtdb.firebaseio.com/UserData.json",
        options
      );

      if (res.ok) {
        toast.success("Booking confirmed");
        setMessage(
          "Payment has been initiated with booking details...! Redirecting to the Dashboard...Now"
        );
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    }

    // Ensure the loader shows for at least 10 seconds
    await new Promise((resolve) => setTimeout(resolve, 10000));
    setLoading(false);

    if (res && res.ok) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  const handleFormValid = (isValid) => {
    setIsFormValid(isValid);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PaymentDetails
            bookingData={bookingData}
            onFormValid={handleFormValid}
            handleNext={handleNext}
            disabled={!isFormValid}
          />
        );

      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <CircularProgress />
                <Typography sx={{ mt: 2 }}>{message}</Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                {/* <Button
               
                  onClick={handleNext}
                  variant="contained"
                  color="success"
                  disabled={!isFormValid}
                  sx={{ width: '200px' }} 
                >
                  <PaymentIcon/>
                   Create Payment
                </Button> */}
              </Box>
            )}
            {getStepContent(activeStep)}
          </React.Fragment>
        )}

        <Toaster
          toastOptions={{
            duration: 5000,
            className: "",
            style: {
              color: "#713200",
            },
          }}
          position="top-right"
        />
      </Box>
    </Box>
  );
};

export default CheckOut;
