import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const initialRows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User' },
  { id: 6, name: 'Eve White', email: 'eve@example.com', role: 'Admin' },
  { id: 7, name: 'Frank Green', email: 'frank@example.com', role: 'User' },
  { id: 8, name: 'Grace Black', email: 'grace@example.com', role: 'Admin' },
];

function AdminUsers() {
  const navigate = useNavigate();

  // State for pagination
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0); // Current page index
  const [pageSize, setPageSize] = useState(5); // Number of rows per page

  const handleAddUserClick = () => {
    navigate('create'); // Relative path
  };

  const handleEditClick = (user) => {
    navigate(`edit/${user.id}`, { state: { user } });
  };

  const handleDeleteClick = (user) => {
    const updatedRows = rows.filter((row) => row.id !== user.id);
    setRows(updatedRows);
  }
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'role', headerName: 'Role', width: 90 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Box >
          <Button
            sx = {{mr: 1}}
            variant="contained"
            size="small"
            onClick={() => handleEditClick(params.row)}
          >
            Edit
          </Button>
          <Button 
            variant="contained"
            size="small"
            onClick={() => handleDeleteClick(params.row.id)}
            >
              Delete
            </Button>
        </Box>
      ),      
    },
  ];

  return (
    <Paper
      sx={{
        height: '85vh',
        width: '100vw',
        margin: '0 auto',
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
        pageSize={pageSize}
        page={page}
        onPageChange={(newPage) => setPage(newPage)} // Handle page change
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)} // Handle page size change
        pageSizeOptions={[10]} // Add pageSizeOptions prop
        initialState={ {
          pagination: { paginationModel: {pageSize: 10}}
        }}
        sx={{ border: 0, flexGrow: 1, marginTop: '1em' }}
      />
    </Paper>
  );
}

export default AdminUsers;