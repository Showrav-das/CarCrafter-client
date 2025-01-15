import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  //   const { name, price, img, details, _id } = product;
  return (
    <>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="200"
          image={product.img}
          alt={product.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.details.slice(0, 60)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="primary">
              ${product.price.toFixed(2)}
            </Typography>
            <Link to={`/details/${product._id}`}>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Product;
