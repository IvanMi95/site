import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Home, MonetizationOn, Handshake } from "@mui/icons-material";

const focusItems = [
  {
    icon: <Home fontSize="large" style={{ color: "#ff7043" }} />,
    title: "Vendiamo il tuo immobile in tempi rapidi e al miglior prezzo",
    description:
      "SGS Immobiliare lavora con un metodo semplice ed efficace che permette risultati remunerativi e prevedibili. La nostra stima scientifica parte da un confronto tra i vari prezzi di compravendita di immobili simili a quello in oggetto di valutazione per caratteristiche e posizione.",
    buttonText: "Trova acquirente",
  },
  {
    icon: <MonetizationOn fontSize="large" style={{ color: "#ff7043" }} />,
    title: "Affitta casa tua con noi",
    description:
      "Il mercato degli affitti presenta una domanda altissima a fronte di una disponibilità di immobili scarsa. Il motivo per il quale molti proprietari non vogliono più affittare le loro proprietà risiede nella morosità degli inquilini e nelle condizioni in cui trovano i loro immobili.",
    buttonText: "Trova casa",
  },
  {
    icon: <Handshake fontSize="large" style={{ color: "#ff7043" }} />,
    title: "Ristrutturazioni senza pensieri",
    description:
      "Sogni di ristrutturare la tua casa senza lo stress di dover cercare la la ditta giuste e seguire personalmente i lavori? Grazie al nostro network di professionisti affidabili e capaci ora è possibile!",
    buttonText: "Scrivici",
  },
];

const FocusSection = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "2rem 1rem" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "2rem" }}
      >
        Il nostro focus
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {focusItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 2 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary" size="small">
                  {item.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FocusSection;
