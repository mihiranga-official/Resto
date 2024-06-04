import * as React from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Logo from "../../../src/Assets/Lillylogo.png";
import AlertDialogSlide from "../ChatBot/Pop";

const socialMediaLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#FDEFEF",
        color: "text.secondary",
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            {/* <Typography variant="h6" sx={{color:"#FC6736",fontWeight:"700"}} color="text.primary" gutterBottom>
            SALON LILLY
            </Typography> */}
            <div>
              <Link to="/dashboard">
                <img className="img" width="70%" src={Logo} alt="ImN" />
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Site map
            </Typography>
            <Link href="#" color="inherit" display="block">
              Home
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Features
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Pricing
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              About
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              How to
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Gallery
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Categories
            </Typography>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Hair Care
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Skin Care
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Nails Care
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Body Care
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Bridal Service
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Support
            </Typography>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Contact
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ mt: "10px" }} display="block">
              Guides
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ ml: "18px", fontWeight: "700" }}
              color="text.primary"
              gutterBottom
            >
              SOCIAL MEDIA
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "80px",
              }}
            >
              <IconButton
                aria-label="Facebook"
                color="inherit"
                component="a"
                href={socialMediaLinks.facebook}
                sx={{ "&:hover": { color: "#1877f2" } }} // Change color on hover
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                color="inherit"
                component="a"
                href={socialMediaLinks.twitter}
                sx={{ "&:hover": { color: "#1da1f2" } }} // Change color on hover
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                color="inherit"
                component="a"
                href={socialMediaLinks.instagram}
                sx={{ "&:hover": { color: "#c32aa3" } }} // Change color on hover
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                color="inherit"
                component="a"
                href={socialMediaLinks.youtube}
                sx={{ "&:hover": { color: "#E72929" } }} // Change color on hover
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ pt: 4, fontSize: "15px" }}
      >
        © 2024 SALON LILLY
      </Typography>

      <AlertDialogSlide />
    </Box>
  );
};

export default Footer;
