import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';
import Car from '../../../images/car1.jpg';

const Banner = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ justifyContent: 'center',alignItems: 'center'}}>
                    <Grid item xs={6} md={6}>
                        <Typography variant="h2" color="#1b5e20">Car Point</Typography>
                        <Typography>
                        Visit the official website of VAHAN to check the vehicle owner name. Step 2: On top of the page, click on 'Know Your Vehicle Details'. (at Top Navigation menu) Step 3: On the new page, enter the vehicle registration number (Car or Bike Plate Number).Jul
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <img src={Car} style={{width:"100%"}} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Banner;