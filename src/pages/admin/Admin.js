import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import {
  Button,
  Stack,
  
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../services/firebaseConfig";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";

const drawerWidth = 280;

const Admin = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [setIsClosing] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const goToDashboard = () => {
    navigate("/AdDashboard");
  };
  const goToUserManage = () => {
    navigate("/UserManage");
  };
  const goToManageService = () => {
    navigate("/PriceUpdate");
  };
  const goToAppointment = () => {
    navigate("/AdminDashboard");
  };

  const goToSentMail = () => {
    navigate("/SentMail");
  };


  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/AdminLogin");
        toast.success("You have been logged out successfully..");
      })
      .catch((error) => {
        toast.error("Error logging out. Please try again.");
      });
  };

  const drawer = (
    <div>
      <Stack
        direction="column"
        spacing={4}
        sx={{ mt: "80px", alignItems: "center" }}
      >
        <Button
          onClick={goToDashboard}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",

            backgroundColor: "#FFE5E5",
            fontFamily: "serif",
            "&:hover": {
              backgroundColor: "#FFD1DA",
            },
          }}
        >
          <DashboardRoundedIcon />
          DashBoard
        </Button>
        <Button
          onClick={goToManageService}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily: "serif",
            "&:hover": {
              backgroundColor: "#FFD1DA",
            },
          }}
        >
          <AdminPanelSettingsIcon />
          Manage Services
        </Button>
        <Button
          onClick={goToUserManage}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily: "serif",

            "&:hover": {
              backgroundColor: "#FFD1DA",
            },
          }}
        >
          <ManageAccountsRoundedIcon />
          Manage Users
        </Button>
        <Button
          onClick={goToAppointment}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily: "serif",
            "&:hover": {
              backgroundColor: "#FFD1DA",
            },
          }}
        >
          <AdminPanelSettingsIcon />
          Manage Appointments
        </Button>

        <Button
          onClick={goToSentMail}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily: "serif",
            "&:hover": {
              backgroundColor: "#FFD1DA",
            },
          }}
        >
          <ForwardToInboxIcon />
          Sent Mail
        </Button>
      
        <Button
          onClick={handleLogOut}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily: "serif",
            "&:hover": {
              backgroundColor: "#FFD1DA",
            },
          }}
        >
          <PowerSettingsNewIcon />
          LogOut
        </Button>
      </Stack>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#FEC7B4",
        }}
      >
        <Toolbar sx={{ backgroundColor: "#F7418F", mb: "22px" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: "550",
              fontSize: "24px",
              fontFamily: "Georgia, serif",
              color: "black",
            }}
          >
            Lilly's Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Admin;
