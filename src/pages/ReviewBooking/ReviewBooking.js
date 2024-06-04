import {
  Autocomplete,
  Box,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Toaster } from "react-hot-toast";
import CardLogo from "../../../src/Assets/cardLogos.png";
const ReviewBooking = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mb: "70px" }}>
        <CardContent
          sx={{
            alignContent: "center",
            textAlign: "center",
            backgroundColor: "#dddddd",
            boxShadow: "0 20px 0px rgba(0,0,0,0.1)",
            borderRadius: 8,
            padding: 4,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 35, color: "#5E3B4D" }}>
            Review the Booking
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
                // value={user.Name}
                // onChange={data}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="phone_number"
                label="Phone Number"
                name="Phone"
                variant="outlined"
                fullWidth
                // value={user.Phone}
                // inputProps={{ inputMode: "numeric" }}
                // onChange={data}
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
            <Grid item xs={6}>
              <TextField
                id="email"
                name="Email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                // value={user.Email}
                // onChange={data}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Branch"
                sx={{ bgcolor: "white" }}
                disabled
                value={"Negambo"}
                fullWidth
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
                  { label: "Service A" },
                  { label: "Service B" },
                  { label: "Service C" },
                  { label: "Service D" },
                  { label: "Service E" },
                ]}
                getOptionLabel={(option) => option.label}
                // value={{ label: user.Service }}
                // onChange={handleServiceChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Service"
                    name="Service"
                    variant="outlined"
                    required
                    // value={user.Service}
                    sx={{ bgcolor: "white" }}
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
                // onChange={data}
                // value={user.Date}
                // formattedDate={formattedDate}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ bgcolor: "white", width: "100%", height: "48px" }}
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
                // value={user.Time}
                variant="outlined"
                select
                // onChange={data}
                fullWidth
                SelectProps={{
                  native: true, // Keep native select enabled
                  // Add padding to the native select
                }}
                sx={{ bgcolor: "white", fontWeight: "800" }}
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
                <option value="06:00 PM">06:00 PM</option>
                <option value="07:00 PM">07:00 PM</option>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="notes"
                label="Notes"
                variant="outlined"
                name="Notes"
                // value={user.Notes}
                // onChange={data}
                fullWidth
                sx={{ bgcolor: "white", mb: "20px" }}
              />
            </Grid>
          </Grid>
          <Typography
            sx={{ color: "#86469C", fontWeight: "700", fontSize: "30px" }}
          >
            Payment Method:{" "}
            <span style={{ fontWeight: "600" }}>Card Payment</span>
          </Typography>

          <img
            className="img"
            width="40%"
            alignItems="left"
            src={CardLogo}
            alt="imN"
          />
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
    </>
  );
};

export default ReviewBooking;
