import React, { useEffect, useState } from "react";
import { auth } from "../../services/firebaseConfig";
import bg from "../../Assets/salonBg.jpg";
import { Table } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
//import { get, getDatabase, ref } from "firebase/database";
import { fetchDataForBooking } from "../admin/AdminDashboard";

const Home = () => {
  const [user, setUser] = useState(null);
  const [userDataShow, setUserDataShow] = useState([]);

  useEffect(() => {
    (async function () {
      const bookingData = await fetchDataForBooking();
      setUserDataShow(bookingData);
    })();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const db = getDatabase();
  //     const dbRef = ref(db, "UserData");
  //     const snapshot = await get(dbRef);

  //     if (snapshot.exists()) {
  //       const dataSnapshot = snapshot.val();
  //       const dataArr = Object.entries(dataSnapshot).map(([key, value]) => ({
  //         key,
  //         ...value,
  //       }));
  //       setUserDataShow(dataArr);
  //     } else {
  //       console.error("No data available");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      setUser(userData);
      if (userData) {
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const getFirstNameFromEmail = (email) => {
    const cleanEmail = email.match(/^[a-zA-Z]+/);
    if (cleanEmail) {
      return cleanEmail[0];
    } else {
      return "";
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "#D20065",
          borderBottomLeftRadius: "250px",
          borderBottomRightRadius: "250px",
          overflow: "hidden",
          // marginTop: "100px",
        }}
      >
        <img
          className="img"
          width="30%"
          height="auto"
          alignItems="left"
          src={bg}
          alt="ImN"
          style={{
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "280px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "50%",
            left: '50%',
            fontSize: '56px'
          }}
        >
          <span>Hello</span>
          <span
            role="img"
            aria-label="wave"
            style={{ marginLeft: "20px" }}
          >
            👋
          </span>
          {user && (
            <span style={{ marginLeft: "10px" }}>
              {getFirstNameFromEmail(user.email)}
            </span>
          )}
        </div>
      </div>
      <Table
        sx={{
          width: "80%",
          minWidth: 600,
          marginLeft: 36,
          border: 1,
          borderColor: "grey.300",
          marginTop: "20px",
        }}
        aria-label="simple table"
      >
        <TableBody>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Service</b>
              </TableCell>
              <TableCell>
                <b>Date</b>
              </TableCell>
              <TableCell>
                <b>Time</b>
              </TableCell>
              <TableCell>
                <b>Notes</b>
              </TableCell>
            </TableRow>
          </TableHead>
          {userDataShow
            .filter((d) => d.Email === user.email)
            .map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.Service}</TableCell>
                <TableCell>{row.Date}</TableCell>
                <TableCell>{row.Time}</TableCell>
                <TableCell>{row.Notes}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Home;
