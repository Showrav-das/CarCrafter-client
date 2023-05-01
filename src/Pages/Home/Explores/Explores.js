import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Explore from '../Explore/Explore';
import { Typography } from '@mui/material';



const Explores = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://car-rental-server-site-production-a096.up.railway.app/products')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,6)));
    },[])

    return (
        <div style={{margin:"40px"}}>
          <Typography color="#ff9800" variant="h3">
              Features Of Cars
          </Typography>
           <Box style={{margin:"40px"}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             products.map(product=> <Explore
             product={product}
             >
                 
             </Explore>)
         }
      </Grid>
    </Box>
        </div>
    );
};

export default Explores;