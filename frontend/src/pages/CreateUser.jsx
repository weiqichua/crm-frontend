// src/pages/CreateUser.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, TextField, Button, Typography } from '@mui/material';

function CreateUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', role: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement user creation logic here
    // For now, we'll just log the user data
    console.log('User created:', user);
    navigate('/admin/users');
  };

  return (
    <Paper sx={{ padding: '2em', width: '50%', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Create New User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: '1em' }}
        />
        <TextField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: '1em' }}
        />
        <TextField
          label="Role"
          name="role"
          value={user.role}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: '1em' }}
        />
        <Button variant="contained" type="submit">
          Create User
        </Button>
      </form>
    </Paper>
  );
}

export default CreateUser;