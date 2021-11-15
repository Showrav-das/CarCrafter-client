import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import Header from '../../../../Shared/Navigation/Header';
import Footer from '../../../../Shared/Footer/Footer';
import { Typography } from '@mui/material';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dry-waters-58580.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return (
        <>
            <Header />
            <Typography variant="h2" color="#ff9800">Products</Typography>
            <Box sx={{ flexGrow: 1, mt:5}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             products.map(product=> <Product
             product={product}
             >
                 
             </Product>)
         }
      </Grid>
            </Box>
            <Footer/>
            </>
    );
};

export default Products;