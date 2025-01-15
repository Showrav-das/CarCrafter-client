import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Explore from "../Explore/Explore";
import { Container, Typography } from "@mui/material";
import Product from "../Home/Product/Product";

const Explores = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://car-server-ssgi.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);

  return (
    <div style={{ margin: "40px" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{ mb: 6 }}
        >
          Our Products
        </Typography>
        {products.length == 0 ? (
          <h6>Loading...</h6>
        ) : (
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Explores;
