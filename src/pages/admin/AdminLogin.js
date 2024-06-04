import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AdminLogin = () => {
  // State variables to store username and password
  // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: "",
  // });

  // Function to handle Google sign-in
  // const logGoogleUser = async () => {
  //   try {
  //     const provider = new GoogleAuthProvider();
  //     const result = await signInWithPopup(auth, provider);
  //     console.log("Google sign-in success:", result);
  //     toast.success("Logged in successfully.");
  //     // Redirect user to dashboard page after successful sign-in

  //     window.location.href = "/dashboard";
  //   } catch (error) {
  //     console.error("Google sign-in error:", error.message);
  //     toast.error("Google sign-in error:");
  //   }
  // };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Successful login

      navigate("/admin");
      console.log(userCredential.user);
      toast.success("Logged in successfully.");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error("Please Enter the Username and Password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            sx={{ fontWeight: 700, fontSize: 35, color: "#5E3B4D" }}
            gutterBottom
          >
            Admin Login
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ mt: "20px" }}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  name="username"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: "20px" }}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: "20px", mb: "20px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  onClick={onLogin}
                >
                  Login
                </Button>
                <Toaster
                  toastOptions={{ duration: 9000 }}
                  position="top-right"
                />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
