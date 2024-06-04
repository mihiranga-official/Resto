import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './Booking.css';

import {
  Box,
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { saveBookingData } from "../redux/BookingDataSlice";

const BookingPage = () => {
  const [user, setUser] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Service: "",
    Date: new Date().toISOString().split("T")[0],
    Time: "08:00 AM",
    Notes: "",
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const isFormFilled = () => {
    return Object.values(user).every((value) => value.trim() !== "");
  };

  const handleServiceChange = (event, value) => {
    setUser({ ...user, Service: value ? value.label : "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validateEmail(user.Email);
    const phoneValid = validatePhoneNumber(user.Phone);
    if (!emailValid || !phoneValid) {
      setErrors({
        ...(!emailValid && { Email: "Invalid email format" }),
        ...(!phoneValid && { Phone: "Invalid phone number format" }),
      });
      return;
    }
    if (isFormFilled()) {
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
        mb: "70px",
      }}
    >
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
        we style,
        <br /> while
        <br /> you
        <br /> smile
      </Typography>
      <form onSubmit={handleSubmit}>
        <CardContent
          sx={{
            alignContent: "center",
            textAlign: "center",
            background: "linear-gradient(135deg, #FFC5C5, #FFD1E3)",
            boxShadow: "0 20px 0px rgba(#EED3D9)",
            borderRadius: 8,
            padding: 2.5,
            marginRight: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 35,
              mt: "8px",
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Book An Appointment
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
                error={!!errors.Phone}
                helperText={errors.Phone}
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
                error={!!errors.Email}
                helperText={errors.Email}
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
                  native: true,
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
                mb: "6px",
                borderRadius: "15px",
                padding: "8px",
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
            {errors.Email && (
              <Typography color="error" variant="body2">
                {errors.Email}
              </Typography>
            )}
            {errors.Phone && (
              <Typography color="error" variant="body2">
                {errors.Phone}
              </Typography>
            )}
          </Grid>
        </CardContent>
      </form>
    </Box>
  );
};

export default BookingPage;
