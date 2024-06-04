import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Footer from "../Footer/Footer";
import "./priceList.css";
import salonIcon from "../../../src/Assets/salonicon.jpg";
import SkinImage from "../../../src/Assets/SkinImg.png";
import { getDatabase, ref, get } from "firebase/database";

function ReadData() {
  let [SkinPriceArray, setSkinPriceArray] = React.useState([]);

  React.useEffect(() => {
    const fetchDataForBridal = async () => {
      const db = getDatabase();
      const dbRef = ref(db, "createprice/Skin");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        
        setSkinPriceArray(Object.values(snapshot.val()));
      } else {
        console.error("No data available");
      }
    };

    fetchDataForBridal();
  }, []);

  return (
    <div className="table">
      <div className="table-wrapper">
        <TableContainer component={Paper}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={salonIcon}
              alt="Salon Icon"
              className="icon"
              style={{ color: "#BC7FCD" }}
            />
            <h2 className="headingS">CLEAN UP | FACIAL</h2>
          </div>

          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="highlighted">
                  <b>Type</b>
                </TableCell>
                <TableCell align="right" className="highlighted">
                  <b>Standard Price(Rs)</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {SkinPriceArray.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.type}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default function BridalTable() {
  return (
    <div>
      <div className="container">
        <div className="image-boxS">
          <img
            src={SkinImage}
            alt="Salon Lilly Bridal Prices"
            className="imageS"
          />
          <div className="BtextS">
            <h2>Salon Lilly Skin Prices</h2>
          </div>
        </div>
      </div>

      <ReadData />

      <Footer />
    </div>
  );
}
