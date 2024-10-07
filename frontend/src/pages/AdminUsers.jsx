import { Button, Box, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../contexts/UsersContext';

function AdminUsers() {
  const { users } = useUsers(); // Fetch users from context
  const navigate = useNavigate();

  const handleViewClick = (user) => {
    // Navigate to ViewUser with the selected user
    navigate(`/admin/users/view/${user.id}`, {
      state: { user },
    });
  };

  const handleAddUserClick = () => {
    // Navigate to the create user page
    navigate('/admin/users/create');
  };  

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'role', headerName: 'Role', width: 120 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleViewClick(params.row)}
          >
            View More
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Paper
      sx={{
        height: '80vh',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      {/* Add User Button Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <Typography variant='h5'>Users</Typography>
        <Button variant="contained" onClick={handleAddUserClick}>
          Add User
        </Button>
      </Box>

      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowHeight={40}
        sx={{
          height: '100%',
          border: 0,
          flexGrow: 1,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            fontSize: '1rem',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-cell': {
            justifyContent: 'center',
            padding: '10px',
          },
        }}
      />
    </Paper>
  );
}

export default AdminUsers;
