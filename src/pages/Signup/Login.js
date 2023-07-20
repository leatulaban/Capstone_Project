import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import { Alert, Box, Button, CircularProgress, Container, Grid } from '@mui/material';
import { useState } from 'react';
import './Signup.js';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Signup from './Signup.js';

const Login = () => {

  //  const [email, setEmail] = useState('');
  //  const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const [formData, setformData] = useState({
     email:'',
     password:''
   });
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitLoading(true);

    if (!validateForm()){
      setSubmitLoading(false);
      return;
    }else{
      //call api.login
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login',formData);
        const token = response.data.token;
        localStorage.setItem('login_token',token);
        navigate('/contact');
        setformData({
        email:"",
        password:""
       })
      } catch (error) {
        let errorMessage = error.response.data.error;
        console.log(errorMessage);
        setError(errorMessage);
      }
      setSubmitLoading(false);
    }
  };

  

  const validateForm = () => {
    if (formData.email === undefined || formData.email === ''){
      setError('Email is required!');
      return false;
    }else if(formData.password === undefined || formData.password === ''){
      setError('Password is required!');
      return false;
    }
      return true;
    }

  const handleChange =(event) => {
    console.log(event.target.name,event.target.value);

    //  if(event.target.name === 'email'){setEmail(event.target.value)};
    //  if(event.target.name === 'password'){setPassword(event.target.value)};

     setformData((prevState) =>({
       ...prevState,
       [event.target.name]: event.target.value
     }));
  };

  return (
<Container>
        
      <Box component="form" className="boxForm" >
        {error && <Alert severity="warning">{error}</Alert> }     
      <Grid container spacing={0} className = 'formAlign'> 
        <Grid id="formTop" item xs={12} sm={4} className='fontSize' >Email: <TextField fullWidth
          required
          id="outlined-required"
          type="email"
          label="Enter your email"
          // onChange={(event) => setEmail(event.target.value)}
          name= "email"
          value={formData.email}
          onChange={handleChange}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4}  className='fontSize'> Password:
        <TextField fullWidth
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          // onChange={(event) => setPassword(event.target.value)}
          name= "password"
          value={formData.password}
          onChange={handleChange}
        />
        </Grid>
      </Grid>

      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>
         <Button 
         className="buttonSubmit1 "  
         type='submit' 
         onClick={handleLogin}
         disabled={submitLoading}
        >
         {submitLoading ? <CircularProgress color="inherit" size={'15px'} />:''}Login
         </Button>
        </Grid>
      </Grid>

      <Grid container spacing={0} className = 'formAlign'>
        <Grid item xs={12} sm={4} className='fontSize'>
        <div className="buttonSubmit2">
          <Link to="/signup">Don't have an account? Click here to register!</Link></div>
        </Grid>
      </Grid>


      </Box>
    </Container>
  )
}

export default Login
