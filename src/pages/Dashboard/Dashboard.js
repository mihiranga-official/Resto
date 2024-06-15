import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";
import { Divider, Link, Stack } from "@mui/material";
import Image2 from "../../../src/Assets/chef.jpg";
import Image3 from "../../../src/Assets/chef2.jpg";
import Image4 from "../../../src/Assets/chef3.jpg";
import map1 from "../../../src/Assets/map1.png";
import videoOne from "../../../src/Assets/videoOne.mp4";
import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
// Define custom CSS to hide the image preview
const customCarouselStyle = {
  ".carousel .slide .thumb": {
    display: "none",
  },
  ".carousel .thumbs-wrapper": {
    display: "none",
  },
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

  return (
    <>
       <Carousel autoPlay={true}>
        <div>
          <img src={Image2} />
        </div>
        <div>
          <img src={Image3} />
        </div>
        <div>
          <img src={Image4} />
        </div>
      </Carousel>

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          fontFamily="Georgia"
          color={"#fb6107"}
          sx={{ mt: "10px" }}
          gutterBottom
        >
       "Savor the Flavor, Every Bite Tells a Story"
        </Typography>
        <div
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "50px",
            fontFamily: "Georgia",
            color: "#222831",
          }}
        >
          <p> Welcome to Resto </p>
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            fontFamily="Georgia"
            color={"#fb6107"}
            sx={{ mt: "10px" }}
            gutterBottom
          >
            CREATING A HEALTHY FOOD COMMUNITY AROUND SRI LANKA
          </Typography>
        </div>
        <div
          style={{
            textAlign: "center",
            // fontWeight: "700",
            fontSize: "50px",
            color: "#686D76",

            fontFamily: "cursive",
          }}
        >
          <p>Eat Fresh, Live Well: Healthy Choices, Happy Lives</p>
        </div>
        <Stack
          direction="row"
          sx={{ textAlign: "center", backgroundColor: "#F6B17A" }}
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
      </>
  );
};

export default Dashboard;
