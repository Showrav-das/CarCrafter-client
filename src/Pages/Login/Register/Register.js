import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Alert,
  Paper,
  Avatar,
} from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useAuth from "../../../Hooks/useAuth";
import { NavLink, useHistory } from "react-router-dom";
import Header from "../../../Shared/Navigation/Header";
import RegisterImg from "../../../images/register.jpg";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerFirebase, loading, user, authError } = useAuth();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegister = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password does not match");
      return;
    }
    registerFirebase(
      loginData.email,
      loginData.password,
      loginData.name,
      history
    );
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper elevation={3} sx={{ p: 4, display: "flex", width: "100%" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <LockOutlinedIcon />
                </Avatar> */}
                <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                  Register
                </Typography>

                {!loading ? (
                  <form onSubmit={handleRegister} style={{ width: "100%" }}>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Full Name"
                      name="name"
                      onChange={handleOnChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Email Address"
                      type="email"
                      name="email"
                      onBlur={handleOnChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Password"
                      type="password"
                      name="password"
                      onBlur={handleOnChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Confirm Password"
                      type="password"
                      name="password2"
                      onBlur={handleOnChange}
                      required
                      variant="outlined"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Register
                    </Button>
                    <Typography
                      variant="texted"
                      type="submit"
                      style={{ width: "90%", marginTop: "5px" }}
                    >
                      Already have an account?
                    </Typography>{" "}
                    <NavLink to="/login">Go to Login</NavLink>
                  </form>
                ) : (
                  <CircularProgress />
                )}

                {user?.email && (
                  <Alert severity="success" sx={{ mt: 2, width: "100%" }}>
                    User Created successfully!
                  </Alert>
                )}
                {authError && (
                  <Alert severity="error" sx={{ mt: 2, width: "100%" }}>
                    {authError}
                  </Alert>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={RegisterImg}
                  alt="Register"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Register;
