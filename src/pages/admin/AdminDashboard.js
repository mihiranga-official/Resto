//-----------------------------------------------------------View Appointment------------------------------------------------//
//-----------------------------------------------------------View Appointment------------------------------------------------//

import { get, getDatabase, ref, remove } from "firebase/database";

import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import Table from "@mui/material/Table";
import Admin from "./Admin";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function AdminDashboard() {
  const [bookingDataArray, setBookingDataArray] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedRecord, setSelectedRecord] = React.useState(null);

  const fetchDataForBooking = async () => {
    const db = getDatabase();
    const dbRef = ref(db, "UserData");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      console.log(
        "data => ",
        Object.values(snapshot.val()),
        " => ",
        snapshot.val()
      );
      const dataSnapshot = snapshot.val();
      const dataArr = [];
      for (let key in dataSnapshot) {
        dataArr.push({ key, ...dataSnapshot[key] });
      }
      console.log("dataArr =>", dataArr);
      setBookingDataArray(dataArr);
    } else {
      console.error("No data available");
    }
  };

  React.useEffect(() => {
    fetchDataForBooking();
  }, []);

  const handleClickOpen = (record) => {
    setSelectedRecord(record);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRecord(null);
  };

  const handleDelete = async () => {
    if (!selectedRecord) return;
    try {
      console.log(
        "Attempting to delete record with Firebase ID:",
        selectedRecord.key
      );

      const db = getDatabase();
      const recordRef = ref(db, `UserData/${selectedRecord.key}`);

      await remove(recordRef);
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      fetchDataForBooking();
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    } finally {
      handleClose();
    }
  };

  const navigate = useNavigate();
  const goToNewApoinment = () => {
    navigate("/NewApoinment");
  };
  return (
    <Box>
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
        Manage Appoinments
      </Typography>
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "20px",
          marginLeft: 36,
          fontFamily: "Georgia, serif",
        }}
      >
        On going Appointments
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 2, marginLeft: 36, marginBottom: 2 }}
        onClick={goToNewApoinment}
      >
        <AddIcon />
        Add Appointment
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
        <TableHead sx={{}}>
          <TableRow>
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
              <b>Appoinment Date</b>
            </TableCell>
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
              <b>Customer Email</b>
            </TableCell>
            <TableCell
              sx={{
                width: "15%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              <b>Customer Name</b>
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
                width: "15%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              <b>Service</b>
            </TableCell>
            <TableCell
              sx={{
                width: "8%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              <b>Time</b>
            </TableCell>
            <TableCell
              sx={{
                width: "8%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              }}
            >
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingDataArray.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.Date}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.Email}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.Name}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.Phone}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.Service}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                {row.Time}
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleClickOpen(row)}
                  variant="outlined"
                  size="small"
                  color="error"
                  fontFamily="Verdana, Geneva, Tahoma, sans-serif"
                >
                  <DeleteIcon />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            borderRadius: "10px",
            padding: "20px",
            minWidth: "400px",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontWeight: "bold", color: "#d32f2f", textAlign: "center" }}
        >
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#555", textAlign: "center", marginBottom: "20px" }}
          >
            Are you sure you want to delete this appointment?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={handleClose}
            sx={{
              color: "#fff",
              backgroundColor: "#1976d2",
              marginRight: "10px",
            }}
          >
            No
          </Button>
          <Button
            onClick={handleDelete}
            sx={{ color: "#fff", backgroundColor: "#d32f2f" }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AdminDashboard;
