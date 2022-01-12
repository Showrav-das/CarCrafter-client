import { Grid } from '@mui/material';
import React from 'react';
import MyOrders from '../../MyOrders/MyOrders';

const DashboardHome = () => {
    return (
        <Grid container>
            <Grid item xs={2} sm={4} md={12} >
                <MyOrders>  
                </MyOrders>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;