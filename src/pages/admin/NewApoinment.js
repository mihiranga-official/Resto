import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
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
import Admin from "./Admin";
import { useDispatch } from "react-redux";
import { saveBookingData } from "../redux/BookingDataSlice";


const NewApoinment = () => {
  const [user, setUser] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Service: "",
    Date: new Date().toISOString().split("T")[0],
    Time: "08:00 AM",
    Notes: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //let name, value;
 
  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };



  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  // Function to check if all form fields are filled
  const isFormFilled = () => {
    return Object.values(user).every((value) => value.trim() !== "");
  };

  // Event handler for service selection in Autocomplete
  const handleServiceChange = (event, value) => {
    setUser({ ...user, Service: value ? value.label : "" });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (isFormFilled()) {
      // Your submission logic here
      dispatch(saveBookingData(user));
      goToCheckOutPage();
    } else {
      toast.error("Please fill in all fields");
    }
  };


  const goToCheckOutPage = () => {
    navigate("/Checkout");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: "50px",
        width: "100%", // Set width to 100%
        height: "200px", // Set height to 200px
      
      }}
    >
      <Admin/>
      
      <form onSubmit={handleSubmit}>
        <CardContent
          sx={{
            alignContent: "center",
            textAlign: "center",
            background: "linear-gradient(135deg, #FFC5C5, #FFD1E3)",
            boxShadow: "0 20px 0px rgba(#EED3D9)",
            borderRadius: 6,
            padding: 3,
            marginRight:45,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 32,
              mt: "8px",
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Add Appointment
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ mt: "5px" }}
          >
            <Grid item xs={6}>
              <TextField
                id="name"
                required
                name="Name"
                label="Name"
                variant="outlined"
                fullWidth
                value={user.Name}
                onChange={data}
                className="textFieldCustom"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#99154E',
                    },
                    
                    '&.Mui-focused fieldset': {
                      borderColor: '#99154E',
                    },
                  },
                 
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="phone_number"
                label="Phone Number"
                name="Phone"
                variant="outlined"
                value={user.Phone}
                fullWidth
                // inputProps={{ inputMode: "numeric" }}
                onChange={data}
                className="textFieldCustom"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#99154E',
                    },
                    
                    '&.Mui-focused fieldset': {
                      borderColor: '#99154E',
                    },
                  },
                 
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ mt: "5px" }}
          >
            <Grid item xs={6}>
              <TextField
                id="email"
                name="Email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={user.Email}
                onChange={data}
                className="textFieldCustom"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#99154E',
                    },
                    
                    '&.Mui-focused fieldset': {
                      borderColor: '#99154E',
                    },
                  },
                 
                }}
               
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Branch"
                value={"Negambo"}
                fullWidth
                className="textFieldCustom"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#99154E',
                    },
                    
                    '&.Mui-focused fieldset': {
                      borderColor: '#99154E',
                    },
                  },
                 
                }}
                disabled
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ mt: "5px" }}
          >
            <Grid item xs={6}>
              <Autocomplete
                id="service"
                options={[
                  { label: "Hair Cut RS:1500" },
                  { label: "Facial RS:2000" },
                  { label: "Full Body Waxing Rs:1450 " },
                  { label: "Spa Pedicure RS:4900" },
                  { label: "Full Dressing RS 2200" },
                ]}
                getOptionLabel={(option) => option.label}
                value={{ label: user.Service }}
                onChange={handleServiceChange}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Service"
                    name="Service"
                    variant="outlined"
                    required
                    value={user.Service}
                    className="textFieldCustom"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#99154E',
                        },
                        
                        '&.Mui-focused fieldset': {
                          borderColor: '#99154E',
                        },
                      },
                     
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="date"
                required
                label="Select Date"
                variant="outlined"
                type="date"
                name="Date"
                onChange={data}
                value={user.Date}
                formattedDate={formattedDate}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                className="textFieldCustom"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#99154E',
                    },
                    
                    '&.Mui-focused fieldset': {
                      borderColor: '#99154E',
                    },
                  },
                 
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ mt: "5px" }}
          >
            <Grid item xs={6}>
              <TextField
                id="time"
                required
                label="Time"
                name="Time"
                value={user.Time}
                variant="outlined"
                select
                onChange={data}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true, // Keep native select enabled
                  // Add padding to the native select
                }}
                className="textFieldCustom"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#99154E',
                    },
                    
                    '&.Mui-focused fieldset': {
                      borderColor: '#99154E',
                    },
                  },
                 
                }}
              >
                <option value="08:00 AM">08:00 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
               
                
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="notes"
                label="Special Note"
                variant="outlined"
                name="Notes"
                value={user.Notes}
                onChange={data}
                fullWidth
                className="textFieldCustom"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#99154E',
                    },
                    
                    '&.Mui-focused fieldset': {
                      borderColor: '#99154E',
                    },
                  },
                 
                }}
              />
            </Grid>
          </Grid>
          <h5 className="headN">Marked with * are mandatory fields</h5>
          <h5 className="headN">If more services are required, add in special note</h5>
     
          <Grid item>
            <Button
              type="submit"
              disabled={!isFormFilled()}
              sx={{
                mb: "10px",
                borderRadius: "15px",
                padding: "15px 30px",
                fontSize: "16px",
                backgroundColor: "#F27BBD",
                fontFamily: "Georgia",
                border: "2px solid #99154E",
                "&:hover": {
                  backgroundColor: "#E659A1",
                },
              }}
              size="large"
              variant="contained"
              fullWidth
      
            >
              Go to Check Out Page
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

export default NewApoinment;
