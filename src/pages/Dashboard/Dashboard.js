import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";
import { Divider, Link, Stack } from "@mui/material";
import Image2 from "../../../src/Assets/Welcome.png";
import map1 from "../../../src/Assets/map1.png";
import videoOne from "../../../src/Assets/videoOne.mp4";
import { useNavigate } from "react-router-dom";

// const salonNameStyle = {
//   marginRight: "auto",
//   fontFamily: "Arial, sans-serif",
//   fontWeight: "bold",
//   fontSize: "15px",
//   letterSpacing: "2px",
//   textTransform: "uppercase",
// };

// const listStyle = {
//   marginLeft: "auto",
//   fontSize: "16px", // Set smaller font size for the list
// };

const cardContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  marginTop: "20px",
};

const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "200px",
  height: "200px",
  margin: "10px",
  borderRadius: "50%",
  transition: "background-color 0.3s",
  cursor: "pointer",
  boxShadow:
    "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
};

const cardContentStyle = {
  textAlign: "center",
};

const footerButtonStyle = {
  marginTop: "20px",
  borderRadius: "100px", // Increase the border radius further
  display: "flex",
  justifyContent: "center",
};

const Dashboard = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const navigate = useNavigate();
  const GoToBookingPage = () => {
    navigate("/booking");
  };
  // const img = {
  //   width: "100%" /* Set width to 100% of viewport width */,
  //   height: "auto" /* Maintain aspect ratio */,
  // };

  return (
    <div style={{ overflowX: "hidden" }}>
      {" "}
      {/* Add overflowX: hidden to prevent horizontal scrolling */}
      <div style={{ justifyContent: "flex-start", maxWidth: "100vw" }}>
        {" "}
        {/* Set max-width to fill entire viewport width */}
        <div
          style={{
            position: "flex-start",
            textAlign: "flex-start",
            backgroundColor: "#D20065",
            borderBottomLeftRadius: "250px",
            borderBottomRightRadius: "250px",
            overflow: "hidden",
          }}
        >
          {" "}
          {/* Add background color */}
          <img
            className="img"
            width="30%"
            height="auto"
            alignItems="left"
            src={Image2}
            alt="Imgn"
            style={{
              borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "280px",
            }}
          />
          <div style={footerButtonStyle}>
            <Link>
              <Button
                onClick={GoToBookingPage}
                variant="contained"
                color="primary"
                sx={{
                  mb: "10px",
                  borderRadius: "20px",
                  padding: "15px 30px",
                  fontSize: "16px",
                  backgroundColor: "#F27BBD",
                  fontFamily: "Georgia",
                  "&:hover": {
                    backgroundColor: "#E659A1",
                  },
                }}
              >
                Book Now
              </Button>
            </Link>
          </div>
          <span
            style={{
              position: "absolute",
              top: "350px", // Adjust the top position as needed
              left: "55%",
              color: "#FFF7FC",
              transform: "translateX(-50%)",
              fontSize: "55px",
              fontWeight: "600",
              fontFamily: "Georgia",
            }}
          >
            Welcome to Salon Lilly
          </span>
        </div>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            textAlign: "center",
            mt: "10px",
            fontWeight: "bold",
            color: "#99154E",
            fontFamily: "Georgia",
          }}
        >
          OUR SERVICES
        </Typography>
        <div style={cardContainerStyle}>
          {[0, 1, 2, 3, 4].map((index) => (
            <Card
              key={index}
              style={{
                ...cardStyle,

                backgroundColor: hoveredIndex === index ? "#E659A1" : "#FED7E2",
              }}
              sx={cardStyle}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              elevation={3}
            >
              <CardContent style={cardContentStyle}>
                <Typography
                  variant="h5"
                  component="h2"
                  fontFamily="cursive"
                  sx={{ fontWeight: "bold" }}
                >
                  {["HAIR", "SKIN", "NAILS", "BODY", "BRIDAL"][index]}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          fontFamily="Georgia"
          color={"#99154E"}
          sx={{ mt: "10px" }}
          gutterBottom
        >
          WE'LL STYLE, WHILE YOU SMILE
        </Typography>
        <div
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "50px",
            fontFamily: "Georgia",
            color: "#E659A1",
          }}
        >
          <p> Welcome to Salon Lilly</p>
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            fontFamily="Georgia"
            color={"#99154E"}
            sx={{ mt: "10px" }}
            gutterBottom
          >
            CREATING A BEAUTIFUL COMMUNITY
          </Typography>
        </div>
        <div
          style={{
            textAlign: "center",
            // fontWeight: "700",
            fontSize: "50px",
            color: "#E659A1",

            fontFamily: "cursive",
          }}
        >
          <p>Look Good & Feel Good!</p>
        </div>
        <Stack
          direction="row"
          sx={{ textAlign: "center", backgroundColor: "#FDEFEF" }}
        >
          <h1
            style={{
              margin: "0 auto",
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Inspire:
            <div
              style={{
                textAlign: "center",
                // fontWeight: "700",
                fontSize: "20px",
                color: "#E659A1",
                fontFamily: "monospace",
              }}
            >
              <p>Inspire the</p>
              <p>srilanka society</p>
              <p>to be well groomed &</p>
              <p>embrace to their</p>
              <p>full potentail</p>
            </div>
          </h1>
          <h1
            style={{
              margin: "0 auto",
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Empower:
            <div
              style={{
                textAlign: "center",
                // fontWeight: "700",
                fontSize: "20px",
                color: "#1B1A17",
                fontFamily: "monospace",
              }}
            >
              <p>we employee talenet</p>
              <p>that is qualified</p>
              <p>through the national</p>
              <p>vocational education</p>
              <p>and lead them to a</p>
              <p>better life</p>
            </div>
          </h1>
          <h1
            style={{
              margin: "0 auto",
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Affordable:
            <div
              style={{
                textAlign: "center",
                // fontWeight: "700",
                fontSize: "20px",
                color: "#E659A1",
                fontFamily: "monospace",
              }}
            >
              <p>Happy client</p>
              <p>paying with</p>
              <p>budget - friendly</p>
              <p>price</p>{" "}
            </div>
          </h1>
          <h1
            style={{
              margin: "0 auto",
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Ambience:
            <div
              style={{
                textAlign: "center",

                fontSize: "20px",
                color: "#1B1A17",
                fontFamily: "monospace",
              }}
            >
              <p>Image of</p>
              <p>calm, stylish</p>
              <p>salon interior</p>{" "}
            </div>
          </h1>
          <h1
            style={{
              margin: "0 auto",
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Safe:
            <div
              style={{
                textAlign: "center",
                // fontWeight: "700",
                fontSize: "20px",
                color: "#E659A1",
                fontFamily: "monospace",
              }}
            >
              <p>Clean,</p>
              <p>sanitized salon</p>
              <p>with mask &</p>
              <p>gloved</p>
              <p>stylist</p>{" "}
            </div>
          </h1>
        </Stack>
        {/* <video src={videoOne} type="video/mp4"></video> */}
        <div className="container-fluid p-0">
          <video width="100%" id="bannerVideo" autoPlay muted loop>
            <source src={videoOne} type="video/mp4" />
          </video>
        </div>
        <Divider />
        <img className="img" src={map1} alt="map" />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
