import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import GoogleIconButton from "../../Components/GoogleButton";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  // State variables to store username and password
  // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: "",
  // });

  // Function to handle Google sign-in
  const logGoogleUser = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in success:", result);
      toast.success("Logged in successfully.");
      // Redirect user to dashboard page after successful sign-in

      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      toast.error("Google sign-in error:");
    }
  };
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

      navigate("/dashboard");
      console.log(userCredential.user);
      toast.success("Logged in successfully.");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error("Please Enter the Username and Password");
    }
  };

  const onSignUp = (e) => {
    navigate("/signup");
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
        <Paper elevation={3} style={{ padding: 30 }}>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            sx={{
              fontWeight: 700,
              fontSize: 35,
              color: "#99154E",
              fontFamily: "Georgia",
            }}
            gutterBottom
          >
            Login
          </Typography>

          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  name="username"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  fullWidth
                  onClick={onLogin}
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
                >
                  Login
                </Button>

                <Toaster
                  toastOptions={{ duration: 9000 }}
                  position="top-right"
                />
              </Grid>

              <Grid item sx={{ alignItems: "center", ml: "55px", mt: "10px" }}>
                <Button
                  color="primary"
                  style={{ textTransform: "none", mt: "25px" }}
                >
                  <Typography
                    variant="body1"
                    onClick={onSignUp}
                    style={{ color: "#E659A1" }}
                  >
                    Don't have an account? Sign Up
                  </Typography>
                </Button>
              </Grid>

              <Grid
                container
                justifyContent="center"
                sx={{ ml: "40px", mt: "20px" }}
              >
                <Grid item style={{ alignItems: "center" }}>
                  <Typography variant="h7">OR</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item style={{ flexStart: "center" }}>
                    <Tooltip title="Sign in with Google">
                      <Button
                        aria-label="googleicon"
                        size="extra-large"
                        sx={{
                          textTransform: "none",
                          color: "#E659A1",
                          fontWeight: "520",
                        }}
                        onClick={logGoogleUser}
                        type="submit"
                        fullWidth
                        startIcon={<GoogleIconButton icon={faGoogle} />}
                      >
                        Continue with Google
                      </Button>
                      <Toaster
                        toastOptions={{ duration: 4000 }}
                        position="top-right"
                      />
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
