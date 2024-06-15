import React, { useState, useEffect } from "react";
import { Container, Paper, Typography, Grid } from "@mui/material";
import Admin from "./Admin";
import Face6Icon from '@mui/icons-material/Face6';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import TableViewIcon from '@mui/icons-material/TableView';
import { getDatabase, ref, get } from "firebase/database";

const AdDashboard = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [monthlyVisitCount, setMonthlyVisitCount] = useState(0);
  const [ongoingAppointments, setOngoingAppointments] = useState(0); // Initialize with 0
  const [serviceAmount] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const dbRef = ref(db, "UserData");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const dataSnapshot = snapshot.val();
          const dataArr = Object.values(dataSnapshot);
          setOngoingAppointments(dataArr.length); // Assuming dataArr is an array
        } else {
          console.error("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Update visit counts
    let count = localStorage.getItem("page_view");
    let monthlyCount = localStorage.getItem("monthly_page_view");

    if (count) {
      count = Number(count) + 1;
      localStorage.setItem("page_view", count);
    } else {
      count = 1;
      localStorage.setItem("page_view", 1);
    }

    if (monthlyCount) {
      monthlyCount = Number(monthlyCount) + 1;
      localStorage.setItem("monthly_page_view", monthlyCount);
    } else {
      monthlyCount = 1;
      localStorage.setItem("monthly_page_view", 1);
    }

    setVisitCount(count);
    setMonthlyVisitCount(monthlyCount);
  }, []);

  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: 20,
        marginLeft: 400,
        padding: 10,
        borderRadius: 20,
        boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Admin />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{
              padding: 20,
              borderRadius: 10,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(to right, #FFCACC, #ff69b4)",
              fontFamily: "Verdana, Geneva, Tahoma"
            }}
          >
            <Typography variant="h6" gutterBottom>
              {<Face6Icon sx={{ mr: 1 }} />}
              Website visit count:
            </Typography>
            <Typography variant="h4" className="website-counter">
              {visitCount}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{
              padding: 20,
              borderRadius: 10,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(to right, #E6A4B4, #FFD966)",
              fontFamily: "Verdana, Geneva, Tahoma"
            }}
          >
            <Typography variant="h6" gutterBottom>
              {<TableViewIcon sx={{ mr: 1 }} />}
              Monthly visit count:
            </Typography>
            <Typography variant="h4" className="website-counter">
              {monthlyVisitCount}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{
              padding: 20,
              borderRadius: 10,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(to right, #FEBBCC, #FFEC9E)",
              fontFamily: "Georgia, serif"
            }}
          >
            <Typography variant="h6" gutterBottom>
              {<EventNoteIcon sx={{ mr: 1 }} />}
              Ongoing Appointments:
            </Typography>
            <Typography variant="h4" className="website-counter">
              {ongoingAppointments}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{
              padding: 20,
              borderRadius: 10,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(to right, #FF9B9B, #FFCCCC)",
              fontFamily: "Courier New, monospace"
            }}
          >
            <Typography variant="h6" gutterBottom>
              {<Diversity2Icon sx={{ mr: 1 }} />}
              Services:
            </Typography>
            <Typography variant="h4" className="website-counter">
              {serviceAmount}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdDashboard;