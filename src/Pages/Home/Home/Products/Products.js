import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "../Product/Product";
import Header from "../../../../Shared/Navigation/Header";
import Footer from "../../../../Shared/Footer/Footer";
import { Container, Typography } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://car-server-ssgi.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Products;
