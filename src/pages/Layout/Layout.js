import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Layout.css"; //
import { Button, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import Logo from "../../../src/Assets/Lillylogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import toast from "react-hot-toast";
import femaleAvatar from "../../Assets/female_Avatar.png";
const Layout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially not logged in
  const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Set isLoggedIn based on user object existence
      return unsubscribe; // Cleanup function to prevent memory leaksa
    });
  }); //
  const login = () => {
    navigate("/login");
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openProfile = () => {
    navigate("/home");
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");

        // Show toast notification
        toast.success("You have been logged out successfully..");
      })
      .catch((error) => {
        // An error happened.

        toast.error("Error logging out. Please try again.");
      });
  };
  //const disableLogout = () => {};
  const headerStyle = {
    height: "100px",
    color: "#99154E",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Align content to the left and right edges
    padding: "0 20px",
  };

  const salonNameStyle = {
    fontWeight: "bold",
    fontSize: "15px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontFamily: "Arial, sans-serif",
    
  };

  return (
    <>
      <div style={headerStyle}>
        <div>
          <Link to="/dashboard">
            <img className="img" width="30%" src={Logo} alt="ImN" />
          </Link>
        </div>
        <Typography
          variant="h6"
          sx={{ mt: "5px" }}
          component="h6"
          style={salonNameStyle}
        >
          <nav className="horizontal-nav">
            <ul>
              <li>
                <Link to="/Booking">Booking</Link>
              </li>
              <li>
                <Link to="/HairPrices">Hair</Link>
              </li>
              <li>
                <Link to="/SkinPrices">Skin</Link>
              </li>
              <li>
                <Link to="/NailPrices">Nail</Link>
              </li>
              <li>
                <Link to="/BodyPrices">Body</Link>
              </li>
              <li>
                <Link to="/BridalPrices">Bridal</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {!isLoggedIn && ( // Conditionally render the login button only when not logged in
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    mb: "38px", // Added margin bottom
                    marginLeft: "20px", // Adjusted margin left to push the avatar to the right
                    backgroundColor: "#F27BBD",
                    fontFamily: "Georgia",
                    "&:hover": {
                      backgroundColor: "#E659A1",
                    },
                  }}
                  variant="contained"
                  onClick={login}
                >
                  Login
                </Button>
              )}
              {isLoggedIn && (
                <>
                  <Tooltip title={"Profile Section"}>
                    <button
                      id="basic-button"
                      variant="contained"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      style={{
                        // cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        mb: "38px", // Added margin bottom
                        marginLeft: "20px", // Adjusted margin left to push the avatar to the right
                      }}
                    >
                      <img
                        src={femaleAvatar}
                        alt="Profile Avatar"
                        style={{
                          width: "30px",
                          height: "30px",
                          alignItems: "center",
                        }}
                      />
                    </button>
                  </Tooltip>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={openProfile}>Profile</MenuItem>

                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              )}
            </ul>
          </nav>
        </Typography>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
