import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paper, TextField, Button, Typography, Box, MenuItem, Divider } from '@mui/material';
import { useUsers } from '../contexts/UsersContext';

const roles = ['Admin', 'Agent'];

function ViewUser() {
  const { updateUserInList } = useUsers(); // Access update function from context
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    role: '',
    email: '',
  });

  const [originalUser, setOriginalUser] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    if (location.state?.user) {
      setUser(location.state.user);
      setOriginalUser(location.state.user);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    updateUserInList(user); // Update user in context
    setIsEditable(false);
    // navigate('/admin/users'); // Navigate back to AdminUsers
  };

  const handleCancel = () => {
    setUser(originalUser); // Revert changes
    setIsEditable(false);
  };

  const handleDisableUser = () => {
    console.log('User disabled:', user);
    // Implement user disable logic here
  };

  return (
    <Paper sx={{ padding: '2em', maxWidth: 800, margin: '2em auto' }}>
      {/* Top Section with Back Button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Box>

      {/* User ID and Name */}
      <Box sx={{ mb: 2, display:'flex', flexDirection: 'row', gap: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          <strong>ID:</strong> {user.id}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Name:</strong> {user.firstName} {user.lastName}
        </Typography>
      </Box>

      <Divider component="div" sx={{ mb: 2 }} />

      {/* Form Fields */}
      <Box
        component="form"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
        }}
      >
        <TextField
          label="First Name"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          InputProps={{
            readOnly: !isEditable,
          }}
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          InputProps={{
            readOnly: !isEditable,
          }}
          required
        />
        <TextField
          select
          label="Role"
          name="role"
          value={user.role}
          onChange={handleChange}
          InputProps={{
            readOnly: !isEditable,
          }}
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
          InputProps={{
            readOnly: !isEditable,
          }}
          required
        />
      </Box>


      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mt: 4 }}>
        {isEditable ? (
          <>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained" color="primary" onClick={() => setIsEditable(true)}>
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={handleDisableUser}>
              Disable User
            </Button>
          </>
        )}
      </Box>
    </Paper>
  );
}

export default ViewUser;
