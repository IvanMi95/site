import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SpeedIcon from "@mui/icons-material/Speed";
import BalanceIcon from "@mui/icons-material/Balance";

import { useTheme } from "@mui/material/styles";
const WhyUsPage = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container
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
      <Grid container spacing={4}>
        {isMd && (
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="data:image/jpeg;base64,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"
              alt="Living Room"
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
        )}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Perché scegliere la nostra agenzia immobiliare a Trieste
          </Typography>

          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <HomeIcon color="primary" fontSize="large" />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">Affidabilità</Typography>
                  <Typography variant="body2">
                    La nostra agenzia rappresenta una scelta sicura per la tua
                    intermediazione immobiliare. Siamo in grado di offrire un
                    servizio completo e professionale adattando i nostri servizi
                    al tuo specifico caso.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <SpeedIcon color="primary" fontSize="large" />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">Rapidità</Typography>
                  <Typography variant="body2">
                    Per noi il tuo immobile è una priorità. Seguiremo
                    personalmente la tua pratica e avremo una linea diretta per
                    rispondere a tutte le tue domande. In poche settimane
                    troveremo un acquirente interessato e ti porteremo proposte
                    convincenti e senza ribassi dalla stima iniziale.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <BalanceIcon color="primary" fontSize="large" />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">Equità</Typography>
                  <Typography variant="body2">
                    Ci rendiamo conto di lavorare in un mercato dove la singola
                    operazione spesso rappresenta anni di sacrifici sia per chi
                    vende che per chi compra. Dunque riteniamo un dovere
                    rappresentare equamente entrambe le parti.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyUsPage;
