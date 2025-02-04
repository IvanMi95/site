import { Box, Divider, Fab } from "@mui/material";
import LandingPage from "./LandingPage";
import WhyUsPage from "./WhyUsPage";
import { useEffect, useState } from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FocusSection from "./FocusSection";
import TestimonialsPage from "./TestimonialsPage";
const Home = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <LandingPage />
      <Divider sx={{ marginY: 5, width: "90%" }} />
      <WhyUsPage />
      <Divider sx={{ marginY: 5, width: "90%" }} />
      <FocusSection />
      <Divider sx={{ marginY: 5, width: "90%" }} />
      <TestimonialsPage />
      {showButton && (
        <Fab
          color="primary"
          size="small"
          onClick={handleScrollToTop}
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </Box>
  );
};

export default Home;
