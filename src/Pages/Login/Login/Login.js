import React, { useState } from "react";
// import Navigation from '../../Shared/Navigation/Navigation';
import {
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Header from "../../../Shared/Navigation/Header";

const Login = () => {
  const [loginData, setloginData] = useState({});
  const { logInUser } = useAuth();
  let location = useLocation();
  let history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setloginData(newLoginData);
  };

  const handleLogin = (e) => {
    logInUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card elevation={3} sx={{ width: "100%", p: 3 }}>
            <CardContent>
              {/* <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <LockOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
                        <Typography variant="h5">Login</Typography>
                    </Box> */}
              <Typography variant="h5">Login</Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="email"
                  label="Email"
                  onChange={handleOnChange}
                  variant="outlined"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  type="password"
                  label="Password"
                  onChange={handleOnChange}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
                >
                  Login
                </Button>
              </form>
            </CardContent>
            <Typography
              variant="texted"
              type="submit"
              style={{ width: "90%", marginTop: "5px" }}
            >
              Do not have an account?
            </Typography>{" "}
            <NavLink to="/register">Register Now</NavLink>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
