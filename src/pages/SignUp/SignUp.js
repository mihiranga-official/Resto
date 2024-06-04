import React, { useState } from "react";
import Footer from "../Footer/Footer";
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { getDatabase, ref, set } from "firebase/database";
import { database } from "../../services/firebaseConfig"; // Import your Firebase Realtime Database

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationMessages, setValidationMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const messages = [];

    // Basic validation checks
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      messages.push("Please enter a valid email address.");
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      messages.push("Please enter a valid 10-digit phone number.");
    }
    if (password.length < 6) {
      messages.push("Password must be at least 6 characters long.");
    }
    if (password !== confirmPassword) {
      messages.push("Passwords do not match.");
    }

    if (messages.length > 0) {
      setValidationMessages(messages);
      return;
    }

    try {
      toast.success("Now you are Registered!!!");

      // Register user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User:", user);

      // Save user details to Firebase Realtime Database
      await saveData(user.uid);

      navigate("/dashboard");
    } catch (error) {
      toast.error("An error occurred during registration.");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const saveData = async (userId) => {
    const userData = {
      email,
      phoneNumber,
      lastName,
      firstName,
      
    };

    try {
      const db = getDatabase();
      await set(ref(db, `users/${userId}`), userData);
      console.log("User data saved successfully!");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: "70px" }}>
        <Typography
          sx={{
            ml: 26,
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 700,
            fontSize: 50,
            mt: "100px",
            color: "#99154E",
            fontFamily: "Georgia",
          }}
        >
          Love Us,
          <br /> Register and
          <br /> getting Touch with us
        </Typography>

        <CardContent
          sx={{
            alignContent: "center",
            textAlign: "center",
            backgroundColor: "#EED3D9",
            boxShadow: "0 20px 0px rgba(#EED3D9)",
            borderRadius: 10,
            padding: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 35,
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Sign Up
          </Typography>

          <Grid container spacing={3} justifyContent="center" sx={{ mt: "5px" }}>
            <Grid item xs={6}>
              <TextField
                required
                label="First Name"
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Last Name"
                variant="outlined"
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: "5px" }}>
            <Grid item xs={6}>
              <TextField
                required
                label="Phone Number"
                variant="outlined"
                fullWidth
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: "5px" }}>
            <Grid item xs={6}>
              <TextField
                required
                label="Password"
                variant="outlined"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Confirm Password"
                variant="outlined"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <br />
          {validationMessages.length > 0 && (
            <Box sx={{ mb: 2 }}>
              {validationMessages.map((message, index) => (
                <Typography key={index} color="error" variant="body2">
                  {message}
                </Typography>
              ))}
            </Box>
          )}
          <Grid item>
            <Button
              sx={{
                mb: "10px",
                borderRadius: "20px",
                padding: "15px 30px",
                fontSize: "16px",
                backgroundColor: "#F27BBD",
                fontFamily: "Georgia",
                "&:hover": {
                  backgroundColor: "#E659A1",
                },
              }}
              size="large"
              variant="contained"
              type="submit"
              fullWidth
            >
              Register Me
            </Button>
          </Grid>
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
        </CardContent>
      </Box>
      <Footer />
    </form>
  );
};

export default SignUp;
