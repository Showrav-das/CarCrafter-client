import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import SingleReview from "../Singlereview/SingleReview";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("https://car-server-ssgi.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  if (allReviews.length == 0) {
    return <h4>Loading...</h4>;
  }
  return (
    <div>
      <Typography variant="h3">Reviews</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {allReviews.map((singleReview) => (
            <SingleReview singleReview={singleReview}></SingleReview>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Reviews;
