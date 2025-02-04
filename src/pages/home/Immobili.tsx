import { Typography, Button, Container, Grid } from "@mui/material";

const Immobili = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
          ></Typography>
          <Button variant="contained" color="primary" size="large">
            TEST
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Immobili;
