import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Car Rental 
          </Typography>
          <NavLink to="/home"><Button style={{color:"white",background:"black",textDecoration:"none"}}>Home</Button></NavLink>
          <NavLink to="/explores"><Button style={{color:"white",background:"black",textDecoration:"none",marginLeft:"3px"}}>Products</Button></NavLink>
          {
              user?.email ?
                <Box>
                  <Button variant="contained" onClick={logOut}>Log Out</Button>
                  <NavLink to="/dashboard"> <Button style={{color:"white",background:"black",textDecoration:"none",margin:"3px"}}>Dashboard</Button></NavLink>
                </Box> :
                <NavLink to="/login"> <Button style={{color:"white",background:"black",textDecoration:"none",marginLeft:"3px"}}>Log In</Button></NavLink> 
              }
              <Typography>
                  {user?.email}
                </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        </>
    );
};

export default Header;