import React from 'react';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { name,price, img,details,_id} = product;
    return (
        <>
            <Grid item xs={2} sm={4} md={4}>
            <Container>
                    <Card style={{ background: "rgba(231, 172, 159,.3)", borderRadius: "10px" }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            // height="140"
                            width="90%"
                            image={img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                               Price: {price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               {details.slice(0,60)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small" variant="contained">Buy Now</Button> */}
                        </CardActions>
                        <Link to={`/details/${_id}`} style={{textDecoration: 'none'}}> <Button size="small"  style={{ padding: '10px',background:"#201C1E",fontWeight:"900",color:"white" }}variant="contained">Buy Now</Button></Link>
                    </Card>
                    </Container>
                </Grid>
        </>
    );
};

export default Product;