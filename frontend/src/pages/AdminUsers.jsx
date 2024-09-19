import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { AppBar, Typography, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User' },
  { id: 6, name: 'Eve White', email: 'eve@example.com', role: 'Admin' },
  { id: 7, name: 'Frank Green', email: 'frank@example.com', role: 'User' },
  { id: 8, name: 'Grace Black', email: 'grace@example.com', role: 'Admin' },
];

const paginationModel = { page: 0, pageSize: 10 };

function AdminUsers() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'role', headerName: 'Role', width: 90 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => handleEditClick(params.row)}
        >
          Edit
        </Button>
      ),
    },
  ];
    
  const navigate = useNavigate();
  const handleAddUserClick = () => {
    navigate('/admin/create');;
  }

  const handleEditClick = (user) => {
    navigate(`/admin/edit/${user.id}`, {state : {user}});
  }

  return (
    <Paper
      sx={{
        height: '75vh',
        width: '75vw',
        margin: '0 20em',
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
      }}
    >
      <div style={{ alignSelf: 'end' }}>
        <Button variant="contained" onClick={handleAddUserClick}>
          Add User
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        sx={{ border: 0, flexGrow: 1 }}
      />
    </Paper>
  );
}

export default AdminUsers;