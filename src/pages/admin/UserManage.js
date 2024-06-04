import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import Typography from "@mui/material/Typography";
import { getDatabase, ref, get, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function UserManage() {
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

  const updateLoginTimestamp = async (userId, field) => {
    try {
      const db = getDatabase();
      const userRef = ref(db, `users/${userId}`);
      await update(userRef, {
        [field]: new Date().toString(),
      });
    } catch (error) {
      console.error("Error updating timestamp:", error);
    }
  };

  const updateUserLogin = async (userId) => {
    try {
      const db = getDatabase();
      const userRef = ref(db, `users/${userId}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (!userData.firstLogin) {
          await updateLoginTimestamp(userId, "firstLogin"); // Set firstLogin timestamp if it's not already set
        }
        await updateLoginTimestamp(userId, "lastLogin"); // Update lastLogin timestamp on every login
      }
    } catch (error) {
      console.error("Error updating user login:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      const userId = currentUser.uid;
      updateUserLogin(userId);
    } else {
      console.log("No user signed in.");
    }
  }, []);
  const navigate = useNavigate();
  const goToAddUser = () => {
    navigate("/SignUp");
  };

  return (
    <div>
      <Admin />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "30px",
          marginLeft: 25,
          color: "#AF0171",
          fontFamily: "Georgia, serif",
        }}
      >
        Manage Users
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 2, marginLeft: 36, marginBottom: 2 }}
        onClick={goToAddUser}
      >
         <AddIcon />
        Add User
       
      </Button>
      <Table
        sx={{
          width: "80%",
          minWidth: 600,
          marginLeft: 36,
          border: 1,
          borderColor: "grey.300",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                width: "18%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              <b>Name</b>
            </TableCell>
            <TableCell
              sx={{
                width: "10%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              <b>Phone Number</b>
            </TableCell>
            <TableCell
              sx={{
                width: "10%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              <b>Email</b>
            </TableCell>
            <TableCell
              sx={{
                width: "10%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              <b>First Login</b>
            </TableCell>
            <TableCell
              sx={{
                width: "10%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              <b>Last Login</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userDataShow.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{
                  width: "10%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >{`${row.firstName} ${row.lastName}`}</TableCell>
              <TableCell
                sx={{
                  width: "10%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.phoneNumber}
              </TableCell>
              <TableCell
                sx={{
                  width: "10%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.email}
              </TableCell>
              <TableCell
                sx={{
                  width: "10%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.firstLogin ? formatTimestamp(row.firstLogin) : "N/A"}
              </TableCell>
              <TableCell
                sx={{
                  width: "10%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.lastLogin ? formatTimestamp(row.lastLogin) : "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserManage;
