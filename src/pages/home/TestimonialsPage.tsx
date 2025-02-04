import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Alex Ward Scherillo",
    type: "Affitto",
    text: "L'agente immobiliare Francesco Gianella è una persona rara. Ha fatto di tutto per trovarci casa. Ha una cortesia e modo di proporsi veramente piacevole e incredibilmente professionale. Non esito a raccomandarlo e la sua agenzia. Un vero Gentleman!",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    name: "Alex Ward Scherillo",
    type: "Affitto",
    text: "L'agente immobiliare Francesco Gianella è una persona rara. Ha fatto di tutto per trovarci casa. Ha una cortesia e modo di proporsi veramente piacevole e incredibilmente professionale. Non esito a raccomandarlo e la sua agenzia. Un vero Gentleman!",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    name: "Cristian Giordano",
    type: "Acquisto",
    text: "Ottima esperienza! Servizio eccellente. Rapidi, concreti e votati al problem solving. Tutti i colleghi di categoria dovrebbero imparare da loro e adeguarsi ai loro standard. Consiglio a tutti questa agenzia.",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    name: "Cristian Giordano",
    type: "Acquisto",
    text: "Ottima esperienza! Servizio eccellente. Rapidi, concreti e votati al problem solving. Tutti i colleghi di categoria dovrebbero imparare da loro e adeguarsi ai loro standard. Consiglio a tutti questa agenzia.",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    name: "Alex Ward Scherillo",
    type: "Affitto",
    text: "L'agente immobiliare Francesco Gianella è una persona rara. Ha fatto di tutto per trovarci casa. Ha una cortesia e modo di proporsi veramente piacevole e incredibilmente professionale. Non esito a raccomandarlo e la sua agenzia. Un vero Gentleman!",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    name: "Alex Ward Scherillo",
    type: "Affitto",
    text: "L'agente immobiliare Francesco Gianella è una persona rara. Ha fatto di tutto per trovarci casa. Ha una cortesia e modo di proporsi veramente piacevole e incredibilmente professionale. Non esito a raccomandarlo e la sua agenzia. Un vero Gentleman!",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    name: "Cristian Giordano",
    type: "Acquisto",
    text: "Ottima esperienza! Servizio eccellente. Rapidi, concreti e votati al problem solving. Tutti i colleghi di categoria dovrebbero imparare da loro e adeguarsi ai loro standard. Consiglio a tutti questa agenzia.",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    name: "Cristian Giordano",
    type: "Acquisto",
    text: "Ottima esperienza! Servizio eccellente. Rapidi, concreti e votati al problem solving. Tutti i colleghi di categoria dovrebbero imparare da loro e adeguarsi ai loro standard. Consiglio a tutti questa agenzia.",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
  },
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const itemsPerView = isSmallScreen ? 1 : 2;

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerView) % testimonials.length,
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerView + testimonials.length) % testimonials.length,
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerView,
  );

  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 8, px: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Leggi cosa pensano i nostri clienti di noi
        </Typography>
      </Box>

      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "primary.main",
            color: "white",
            zIndex: 1,
          }}
        >
          <ArrowBack />
        </IconButton>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <AnimatePresence initial={false}>
            {visibleTestimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card sx={{ p: 2 }}>
                    <CardContent>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Avatar
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          sx={{ mr: 2 }}
                        />
                        <Box>
                          <Typography variant="h6" fontWeight="bold">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.type}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" gutterBottom>
                        {testimonial.text}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {"⭐".repeat(testimonial.rating)}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "primary.main",
            color: "white",
            zIndex: 1,
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestimonialsPage;
