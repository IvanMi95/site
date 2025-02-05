import { Typography, Button, Container, Box } from "@mui/material";

import Grid from "@mui/material/Grid2";

const LandingPage = () => {
  return (
    <Box
      maxWidth="false"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: { xs: "40px", md: "50px" },
        paddingX: { xs: 2, md: 6 },
      }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "left" },
            paddingLeft: { xs: 0, md: 4 },
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              fontWeight={500}
              component="h1"
              gutterBottom
            >
              Realizziamo{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 600,
                  color: "#1976d2",
                }}
              >
                il tuo
              </Box>{" "}
              progetto di felicità
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              | Ristrutturazioni senza pensieri
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Valuta subito la tua proprietà
            </Button>
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src="https://i.pinimg.com/564x/3a/fc/61/3afc616977d704e0c9853b82675352d5.jpg"
            alt="Living room"
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: "600px",
              maxHeight: "600px",
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
