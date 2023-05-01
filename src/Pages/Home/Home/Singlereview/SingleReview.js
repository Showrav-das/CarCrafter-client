import React from 'react';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Stack, Rating } from '@mui/material';

const SingleReview = ({ singleReview }) => {
    const { name, review, rating } = singleReview;
    return (
        <>
            <Grid item xs={2} sm={4} md={3}>
                <Container>
                    <Card style={{ background: "rgba(231, 172, 159,.3)", borderRadius: "10px" }}>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {review}
                            </Typography>
                            <Typography                                     style={{marginLeft:"50px"}}
 variant="body2" color="text.secondary">
                                <Stack >
                                <Rating 
                                        precision={.5}
                                        readOnly
                                        value={rating}
                                    />
                                </Stack>
                            </Typography>

                        </CardContent>
                        <CardActions>
                            {/* <Button size="small" variant="contained">Buy Now</Button> */}
                        </CardActions>
                    </Card>
                </Container>
            </Grid>
        </>
    );
};

export default SingleReview;