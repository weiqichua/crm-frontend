import { useState, useEffect } from 'react';
import { Paper, TextField, Button, Typography, Box, MenuItem } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const roles = ['Admin', 'User', 'Agent']; // Example roles for the dropdown

function ViewUser() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    role: '',
    email: '',
  });

  const [isEditable, setIsEditable] = useState(false); // Toggle to control edit mode

  useEffect(() => {
    if (location.state?.user) {
      setUser(location.state.user); // Set the user data from the passed location state
    }
  }, [location.state]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditToggle = () => {
    setIsEditable((prev) => !prev); // Toggle between editable and read-only mode
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('User updated:', user);
    setIsEditable(false); // Set back to read-only after saving
  };

  const handleCancel = () => {
    // Reset any changes and return to view mode
    setIsEditable(false);
  };

  const handleDisable = () => {
    // Implement disable user logic here
    console.log('User disabled:', user);
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Paper sx={{ padding: '2em', maxWidth: 800, margin: '2em auto' }}>
      {/* Top Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mb: 1 }}>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="secondary">
          User Details
        </Button>
      </Box>
      <Divider component="div" />

      {/* User ID and Name Display */}
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h6" sx={{ mr: 2 }}>
          User ID: {user.id}
        </Typography>
        <Typography variant="h6">
          Name: {user.firstName} {user.lastName}
        </Typography>
      </Box>

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
          <Button variant="contained" color="primary" onClick={handleEditToggle}>
            Edit
          </Button>
        )}
        {!isEditable && (
          <Button variant="contained" color="error" onClick={handleDisable}>
            Disable User
          </Button>
        )}
      </Box>
    </Paper>
  );
}

export default ViewUser;