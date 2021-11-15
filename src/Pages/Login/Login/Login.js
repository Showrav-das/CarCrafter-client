import React,{useState} from 'react';
// import Navigation from '../../Shared/Navigation/Navigation';
import loginImage from '../../../images/login.jpg';
import logIn from '../../../images/log-in.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container,Button, TextField } from '@mui/material';
import { NavLink,useLocation,useHistory } from "react-router-dom";
import Header from '../../../Shared/Navigation/Header';
import useAuth from '../../../Hooks/useAuth';


const background = {
    background: `url(${logIn})`,
    height:"600px",
    backgroundBlendMode: ' darken, luminosity'
}

const Login = () => {
    const [loginData, setloginData] = useState({});
    const { logInUser } = useAuth();
    let location = useLocation();
    let history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setloginData(newLoginData);
    }

    const handleLogin = e => {
        logInUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
    }
    return (
        <div  style={background}>
         <Header/>   
        <h2>Please Log in</h2>
        <Container>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleLogin}>
                            <TextField
                                id="filled-textarea"
                                label="Email Address"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                required
                                placeholder="email"
                                variant="filled"
                                style={{ width: '100%' }}
                            />
                            <TextField
                               id="filled-textarea"
                                label="Password"
                                type="password"
                                variant="filled"
                                name="password"
                                onChange={handleOnChange}
                                style={{ width: '100%' }}
                            />
                            <Button variant="contained" type="submit" style={{ width: '90%', marginTop: '5px' }}>Log In</Button>
                        <NavLink to="/register">
                        <Button variant="texted" type="submit" style={{ width: '90%', marginTop: '5px' }}>New user? Please Register</Button>
                        </NavLink>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={loginImage} style={{ width: '100%' }} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
    );
}

export default Login;