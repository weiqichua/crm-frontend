import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paper, TextField, Button, Typography, Box, Divider, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useUsers } from '../contexts/useUsers';

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
  const [open, setOpen] = useState(false);

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

  const handleDisableClick = () => {
    setOpen(true);
  }

  const handleDialogClose = () => {
    setOpen(false);
  }

  const handleDisableUser = () => {
    const disabledUser = { ...user, status: 'disabled' };
    updateUserInList(disabledUser);
    navigate('/admin/users');
    setOpen(false);
  };

  return (
    <Paper sx={{ padding: '2em', maxWidth: 800, margin: '2em auto' }}>
      {/* Top Section with Back and Use Details Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mb: 2 }}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button variant="contained" color='secondary'>
          User Details
        </Button>
      </Box>

      <Divider component="div" sx={{ mb: 2 }} />

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
          label="Role"
          name="role"
          value={user.role}
          disabled={true}
        />
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
            <Button variant="contained" color="error" onClick={handleDisableClick}>
              Disable User
            </Button>
          </>
        )}
      </Box>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Disable User</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to disable this user?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDisableUser} color="error" variant="contained">
            Disable
          </Button>
        </DialogActions>
      </Dialog>

    </Paper>
  );
}

export default ViewUser;
