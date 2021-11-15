import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container,Button, TextField, Typography, CircularProgress, Alert } from '@mui/material';
// import Navigation from '../../../Shared/Navigation/Navigation';
import useAuth from '../../../Hooks/useAuth';
import { NavLink, useHistory } from 'react-router-dom';
import Header from '../../../Shared/Navigation/Header';
import RegisterImg from '../../../images/register.jpg';


const backgroundColor = {
    background: "#EAE2E5",
    marginTop:"20px"
}

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerFirebase,loading,user,authError} = useAuth();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegister = e => {
        
        if (loginData.password !== loginData.password2) {
            alert('password not match');
            return;
        }
        registerFirebase(loginData.email, loginData.password,loginData.name,history);
        e.preventDefault();
    }
    return (
        <>
        <Header/>
       <Container>
            <Box sx={{ flexGrow: 1 }} style={backgroundColor}>
                <Grid container spacing={2} sx={{
                    display: "flex",justifyContent: 'center', alignItems:'center'}}>
                    <Grid item xs={12} md={6}>
                    <Typography variant="h4">
                        Please Register
                    </Typography>
                        {!loading &&
                            <form onSubmit={handleRegister}>
                                <TextField
                                id="filled-basic"
                                label="USer name"
                                name="name"
                                onChange={handleOnChange}
                                required
                                placeholder="enter your name"
                                variant="filled"
                                style={{ width: '85%' }}
                            />
                                <TextField
                                    id="filled-textarea"
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnChange}
                                    
                                    placeholder="email"
                                    variant="filled"
                                    style={{ width: '85%' }}
                                />
                                <TextField
                                    id="filled-textarea"
                                    label="Password"
                                    type="password"
                                    variant="filled"
                                    name="password"
                                    onBlur={handleOnChange}
                                    style={{ width: '85%' }}
                                />
                                <TextField
                                    id="filled-textarea"
                                    label="Confirm Password"
                                    type="password"
                                    variant="filled"
                                    name="password2"
                                    onBlur={handleOnChange}
                                    style={{ width: '85%' }}
                                />
                                <Button type="submit" style={{ width: '80%', background:"#201C1E",marginTop: '5px',fontWeight:"900",color:"white" }}>Register</Button>
                                <NavLink to="/login">
                                    <Button>Already register?Please Login</Button>
                                </NavLink>
                            </form>}
                        
                        {loading && <CircularProgress />}
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={RegisterImg} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container> 
    </>
    );
};

export default Register;