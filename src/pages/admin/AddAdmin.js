import React, { useState } from "react";
//import Autocomplete from "@mui/material/Autocomplete";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const AddAdmin = () => {
  const [user, setUser] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Service: "",
    Date: new Date().toISOString().split("T")[0],
    Time: "",
    Notes: "",
  });
  const navigate = useNavigate();
  //let name, value;
  console.log(user, "janith");
  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const getdata = async (e) => {
  //   const { Name, Phone, Email, Service, Date, Time, Notes } = user;
  //   e.preventDefault();
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ Name, Phone, Email, Service, Date, Time, Notes }),
  //   };

  //   const res = await fetch(
  //     "https://he-and-she-356f5-default-rtdb.firebaseio.com/UserData.json",
  //     options
  //   );
  //   console.log(res);

  //   if (res.ok) {
  //     toast.success("Booking confirmed");
  //     setTimeout(() => {
  //       toast.success("You're being redirected to the Dashboard!!!!!! ");
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //       }, 3000);
  //     }, 1000);
  //   } else {
  //     toast.error("Something went wrong");
  //   }
  // };
  console.log("User State:", user);
  // const date = new Date();
  // const formattedDate = date
  //   .toLocaleDateString("en-GB", {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //   })
  //   .split("/")
  //   .reverse()
  //   .join("-");

  // Function to check if all form fields are filled
  const isFormFilled = () => {
    return Object.values(user).every((value) => value.trim() !== "");
  };

  // Event handler for service selection in Autocomplete
  // const handleServiceChange = (event, value) => {
  //   setUser({ ...user, Service: value ? value.label : "" });
  // };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (isFormFilled()) {
      // Your submission logic here
    } else {
      toast.error("Please fill in all fields");
    }
  };

  // const handleChange = (event) => {
  //   if (event.target.value.match(/[^0-9]/)) {
  //     event.preventDefault();
  //   }
  // otherwise, continue with the rest of your logic
  // ...
  //};
  //
  const goToCheckOutPage = () => {
    navigate("/Checkout");
  };
  return (
    <Box
      sx={{
        marginLeft: "25%",
        display: "flex",
        justifyContent: "space-between",
        mb: "70px",
      }}
    >
      <form onSubmit={handleSubmit}>
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
              fontSize: 40,
              mt: "10px",
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Welcome to Admin Creation
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ mt: "5px" }}
          >
            <Grid item xs={5}>
              <TextField
                id="Fname"
                required
                name="FName"
                label="First Name"
                variant="outlined"
                fullWidth
                value={user.Name}
                onChange={data}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                id="Lname"
                required
                name="LName"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={user.Name}
                onChange={data}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ mt: "5px" }}
          >
            <Grid item xs={5}>
              <TextField
                id="phone_number"
                label="Phone Number"
                name="Phone"
                variant="outlined"
                value={user.Phone}
                fullWidth
                // inputProps={{ inputMode: "numeric" }}
                onChange={data}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                id="email"
                name="Email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={user.Email}
                onChange={data}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ mt: "5px" }}
          >
            <Grid item xs={5}>
              <TextField
                id="password"
                name="Password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={user.Email}
                onChange={data}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                id="confirm Password"
                name="Confirm Password"
                label="Confirm Password"
                type="confirm Password"
                variant="outlined"
                fullWidth
                value={user.Email}
                onChange={data}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>

          <br></br>
          <Grid item>
            <Button
              type="submit"
              disabled={!isFormFilled()}
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
              // onClick={getdata}
              onClick={goToCheckOutPage}
            >
              Create An Admin
            </Button>

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
          </Grid>
        </CardContent>
      </form>
    </Box>
  );
};

export default AddAdmin;
