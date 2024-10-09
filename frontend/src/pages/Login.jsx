// src/pages/Login.jsx

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Box, Button, TextField, Typography } from '@mui/material';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate(`/agent`);
      }

    } else {
      alert('Invalid credentials! Please try again');
    }
  };

  return (
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin} style={{ width: '300px' }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter username'
              sx={{ marginBottom: '1em' }}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password'
              sx={{ marginBottom: '1em' }}
            />            
            <Button variant="contained" type="submit" fullWidth>
              Login
            </Button>
          </form>
        </Box>
  );
}

export default Login;