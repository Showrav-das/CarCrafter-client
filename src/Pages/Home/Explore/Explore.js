import { Container, Grid } from '@mui/material';
import React,{useParams, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Details from '../Details/Details';
import { Link } from 'react-router-dom';

const Explore = ({ product }) => {
    const { name, img,price, details ,_id} = product;
    return (
        <>
            {/* <h2>explore page</h2> */}
            <Grid item xs={2} sm={4} md={4}>
            <Container>
                    <Card style={{background:"rgba(231, 172, 159,.3)",borderRadius:"10px"}} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100"
                            width="90%"
                            image={img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
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
                            <Link to={`/details/${_id}`} style={{textDecoration:"none", marginBottom:"20px",}}> <Button size="small" style={{ padding: '15px',background:"#201C1E",fontWeight:"900",color:"white" }}>Buy Now</Button></Link>
                        </CardActions>
                    </Card>
                    </Container>
            </Grid>
            
        </>
    );
};

export default Explore;