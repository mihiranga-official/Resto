import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, CardContent, FormControlLabel, Grid, Select, TextField, Typography, MenuItem, Checkbox } from "@mui/material";
import { get, getDatabase, ref } from "firebase/database";
import Admin from "./Admin";

const SentMail = () => {
  const [fromEmail, setFromEmail] = useState('salonlillysl@gmail.com');
  const [carbon, setCarbon] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [userDataShow, setUserDataShow] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const db = getDatabase();
      const dbRef = ref(db, "users");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const dataSnapshot = snapshot.val();
        const dataArr = Object.entries(dataSnapshot).map(([key, value]) => ({ key, ...value }));
        setUserDataShow(dataArr);
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allEmails = userDataShow.map(userData => userData.email).join(',');
      setCarbon(allEmails);
    } else {
      setCarbon('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_4znnwsv";
    const templateId = "template_anc85em";
    const publicKey = "p1o5gsUrkYNjJOGwp";

    const templateParams = {
      from_email: fromEmail,
      to_carbon: carbon,
      to_email: toEmail,
      subject: subject,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        toast.success("Email sent successfully");
        setSubject('');
        setMessage('');
        setToEmail('');
        setCarbon('');
      })
      .catch((error) => {
        console.log("Email not successfully", error);
        toast.error("Failed to send email");
      });
  };

  const isFormValid = () => {
    return (
      fromEmail.trim() !== "" &&
      (carbon.trim() !== "" || selectAll) &&
      (toEmail.trim() !== "" || selectAll) &&
      subject.trim() !== "" &&
      message.trim() !== ""
    );
  };

  return (
    <Box>
     <Admin/>
      <form onSubmit={handleSubmit}>
        <CardContent
          sx={{
            backgroundColor: "#EED3D9",
            borderRadius: 10,
            padding: 4,
            minWidth: 200,
            width: 550, 
            height: 630, 
            marginLeft: 75,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#99154E",
              fontFamily: "Georgia",
              mb: 2,
            }}
          >
            Send Email
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="fromEmail"
                name="fromEmail"
                label="From Email Address"
                variant="outlined"
                fullWidth
                required
                value={fromEmail}
                disabled
                sx={{ bgcolor: "white",  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                 id="toEmail"
                 required
                 name="toEmail"
                 label="To Email Address"
                 variant="outlined"
                 fullWidth
                value={carbon}
                onChange={(e) => setCarbon(e.target.value)}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                id="toEmailselect"
                required
                name="toEmailselect"
                label="To Email Address (select one)"
                variant="outlined"
                fullWidth
                value={toEmail}
                onChange={(e) => setToEmail(e.target.value)}
                sx={{ bgcolor: "white" }}
              >
                {userDataShow.map((userData) => (
                  <MenuItem key={userData.key} value={userData.email}>
                    {userData.email}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={selectAll} onChange={handleSelectAll} />}
                label="Select All"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="subject"
                name="subject"
                required
                label="Subject"
                variant="outlined"
                fullWidth
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="body"
                name="body"
                label="Message "
                required
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            disabled={!isFormValid()}
            sx={{ mt: 2 }}
          >
            Send
            <SendIcon />
          </Button>
        </CardContent>
      </form>

      <Toaster position="top-right" />
    </Box>
  );
};

export default SentMail;
