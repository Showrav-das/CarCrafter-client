import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const Header = () => {
  const { user, logOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenu = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileClose = () => {
    setMobileAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Car Crafter
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <NavLink
              to="/home"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink
              to="/explores"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Products</Button>
            </NavLink>

            {user?.email ? (
              <>
                <IconButton onClick={handleMenu} sx={{ ml: 2 }} color="inherit">
                  {user?.photoURL ? (
                    <Avatar
                      src={user.photoURL}
                      sx={{ width: 32, height: 32 }}
                    />
                  ) : (
                    <AccountCircleIcon />
                  )}
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem>{user.displayName || user.email}</MenuItem>
                  <Divider />
                  <MenuItem onClick={logOut}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: "flex", gap: 1 }}>
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      "&:hover": {
                        borderColor: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/register" style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="primary">
                    Register
                  </Button>
                </NavLink>
              </Box>
            )}
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleMobileMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileAnchorEl}
              open={Boolean(mobileAnchorEl)}
              onClose={handleMobileClose}
            >
              <MenuItem onClick={handleMobileClose}>
                <NavLink
                  to="/home"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleMobileClose}>
                <NavLink
                  to="/explores"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Products
                </NavLink>
              </MenuItem>
              {user?.email ? (
                <MenuItem onClick={logOut}>Logout</MenuItem>
              ) : (
                <>
                  <MenuItem onClick={handleMobileClose}>
                    <NavLink
                      to="/login"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Login
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleMobileClose}>
                    <NavLink
                      to="/register"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Register
                    </NavLink>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
