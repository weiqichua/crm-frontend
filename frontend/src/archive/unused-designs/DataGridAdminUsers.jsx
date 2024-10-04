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

  const [rows, setRows] = useState(initialRows);

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const handleAddUserClick = () => {
    navigate('create');
  };

  const handleViewClick = (user) => {
    navigate(`view/${user.id}`, { state: { user } });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'role', headerName: 'Role', width: 120 },
    {
      field: 'actions',
      headerName: '',
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'center' , width: '100%' }}>
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
        height: '85vh',
        width: '100vw',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
      }}
    >
      <div style={{ alignSelf: 'end', marginBottom: '1em' }}>
        <Button variant="contained" onClick={handleAddUserClick}>
          Add User
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pageSizeOptions={[10]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        sx={{
          border: 0,
          flexGrow: 1,
          marginTop: '1em',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            fontSize: '1rem',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-cell': {
            justifyContent: 'center',
            padding: '10px',
          },
          '& .MuiDataGrid-footerContainer': {
            justifyContent: 'flex-end',
            paddingRight: '1em',
          },
          '& .MuiDataGrid-cell--textLeft': {
            textAlign: 'left',
          },
        }}
      />
    </Paper>
  );
}

export default AdminUsers;