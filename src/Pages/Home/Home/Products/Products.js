"use client";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: "#f4511e",
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "& .MuiCardMedia-root": {
    height: 200,
  },
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: 8,
  right: 8,
  backgroundColor: "rgba(73, 80, 87, 0.85)",
  color: "#fff",
  fontWeight: 500,
}));

const CompareButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: 8,
  left: 8,
  backgroundColor: "#f4511e",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#e64a19",
  },
}));

// Car data
const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Esquire",
    price: "¥ 34,50,000",
    category: "Reconditioned",
    year: 2017,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9V2YZ66rFLfz3bTg9irng6yxQpSi5q.png",
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Esquire",
    price: "¥ 34,50,000",
    category: "Reconditioned",
    year: 2017,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9V2YZ66rFLfz3bTg9irng6yxQpSi5q.png",
  },
  {
    id: 3,
    brand: "Toyota",
    model: "Noah",
    price: "¥ 21,50,000",
    category: "Used",
    year: 2011,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9V2YZ66rFLfz3bTg9irng6yxQpSi5q.png",
  },
  {
    id: 4,
    brand: "Toyota",
    model: "Hiace",
    price: "¥ 0",
    category: "Used",
    year: 2014,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9V2YZ66rFLfz3bTg9irng6yxQpSi5q.png",
  },
];

// Main component
export default function CarListingsPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          {cars.map((car) => (
            <Grid item xs={12} sm={6} md={3} key={car.id}>
              <StyledCard>
                <CompareButton size="small" variant="contained">
                  Compare
                </CompareButton>
                <StatusChip label="Sold out" />
                <CardMedia
                  component="img"
                  image={car.image}
                  alt={`${car.brand} ${car.model}`}
                />
                <CardContent>
                  <Typography variant="subtitle2" color="text.secondary">
                    {car.brand}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h2"
                    color="#f4511e"
                    gutterBottom
                  >
                    {car.model}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {car.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {car.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Model Year: {car.year}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
