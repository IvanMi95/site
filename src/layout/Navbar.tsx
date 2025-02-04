import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const location = useLocation();
  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        color="transparent"
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            SGS IMMOBILIARE
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button
              onClick={() => navigate("/")}
              color="inherit"
              sx={{
                marginRight: 3,
                fontWeight: 500,
                // color: location.pathname === "/" ? "white" : "inherit",
                // backgroundColor:
                //   location.pathname === "/" ? "#1976d2" : "inherit",
                "&:hover": { backgroundColor: "#1976d2", color: "white" },
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => navigate("/immobili")}
              color="inherit"
              sx={{
                marginRight: 3,
                fontWeight: 500,
                // color: location.pathname === "/immobili" ? "white" : "inherit",
                // backgroundColor:
                //   location.pathname === "/immobili" ? "#1976d2" : "inherit",
                "&:hover": { backgroundColor: "#1976d2", color: "white" },
              }}
            >
              Immobili
            </Button>
            <Button
              onClick={() => navigate("/vision-mission")}
              color="inherit"
              sx={{
                marginRight: 3,
                fontWeight: 500,
                // color:
                //   location.pathname === "/vision-mission" ? "white" : "inherit",
                // backgroundColor:
                //   location.pathname === "/vision-mission"
                //     ? "#1976d2"
                //     : "inherit",
                "&:hover": { backgroundColor: "#1976d2", color: "white" },
              }}
            >
              Vision e Mission
            </Button>
            <Button variant="contained" color="primary">
              Contattaci
            </Button>
          </Box>
          <IconButton
            edge="end"
            color="primary"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Menu
          </Typography>
          <Divider />
          <List>
            <ListItem button onClick={() => handleNavigation("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation("/immobili")}>
              <ListItemText primary="Immobili" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleNavigation("/vision-mission")}
            >
              <ListItemText primary="Vision e Mission" />
            </ListItem>
          </List>
          <Divider sx={{ marginY: 2 }} />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleNavigation("/contact")}
          >
            Contattaci
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
