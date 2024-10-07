import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, TextField, Button, Typography, Box, MenuItem } from '@mui/material';
import { useUsers } from '../contexts/UsersContext'; // Import the useUsers hook


const roles = ['Admin', 'Agent']; // Example roles for the dropdown

function CreateUser() {
  const {users, setUsers } = useUsers();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    role: '',
    email: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1,
      ...user,
    }

    setUsers((prevUsers) => [...prevUsers, newUser]);
    // Implement user creation logic here
    console.log('User created:', user);

    navigate('/admin/users');
  };

  const handleCancel = () => {
    navigate('/admin/users');
  };

  return (
    <Paper sx={{ padding: '2em', maxWidth: 600, margin: '2em auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Add User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
            mb: 3,
          }}
        >
          <TextField
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            select
            label="Role"
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
          <Button variant="contained" type="submit">
            Add User
          </Button>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default CreateUser;
