import React, { useEffect, useState } from "react";
import { auth } from "../../services/firebaseConfig";
import bg from "../../Assets/salonBg.jpg";
import { Table } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { get, getDatabase, ref } from "firebase/database";

const Home = () => {
  const [user, setUser] = useState(null);
  const [userDataShow, setUserDataShow] = useState([]);

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
        const dataArr = Object.entries(dataSnapshot).map(([key, value]) => ({
          key,
          ...value,
        }));
        setUserDataShow(dataArr);
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
          position: "fixed",
          top: "150px",
          left: "70%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          fontSize: "56px",
          fontWeight: "700",
          color: "#fff",
          zIndex: 9999,
        }}
      >
        <span>Hello</span>
        <span
          role="img"
          aria-label="wave"
          style={{ fontSize: "56px", marginLeft: "20px" }}
        >
          👋
        </span>
        {user && (
          <h4 style={{ marginLeft: "10px" }}>
            {getFirstNameFromEmail(user.email)}
          </h4>
        )}
      </div>
      <div
        style={{
          position: "flex-start",
          textAlign: "flex-start",
          backgroundColor: "#D20065",
          borderBottomLeftRadius: "250px",
          borderBottomRightRadius: "250px",
          overflow: "hidden",
          marginTop: "100px",
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
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Phone Number</b>
              </TableCell>
              <TableCell>
                <b>Email</b>
              </TableCell>
            </TableRow>
          </TableHead>
          {userDataShow.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{`${row.firstName} ${row.lastName}`}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Home;
