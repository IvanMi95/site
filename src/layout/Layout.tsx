import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ flexGrow: 1, paddingTop: "64px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
