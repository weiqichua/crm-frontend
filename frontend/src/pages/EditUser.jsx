// src/pages/EditUser.jsx

import  { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paper, TextField, Button, Typography } from '@mui/material';

function EditUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(location.state.user);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement user update logic here
    // For now, we'll just log the updated user data
    console.log('User updated:', user);
    navigate('/admin/users');
  };

  return (
    <Paper sx={{ padding: '2em', width: '50%', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Edit User
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
          Update User
        </Button>
      </form>
    </Paper>
  );
}

export default EditUser;