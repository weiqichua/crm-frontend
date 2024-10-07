import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const initialRows = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', role: 'Admin' },
  { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', role: 'Admin' },
  { id: 4, firstName: 'Alice', lastName: 'Brown', email: 'alice@example.com', role: 'Admin' },
  { id: 5, firstName: 'Charlie', lastName: 'Davis', email: 'charlie@example.com', role: 'Admin' },
  { id: 6, firstName: 'Eve', lastName: 'White', email: 'eve@example.com', role: 'Admin' },
  { id: 7, firstName: 'Frank', lastName: 'Green', email: 'frank@example.com', role: 'Admin' },
  { id: 8, firstName: 'Grace', lastName: 'Black', email: 'grace@example.com', role: 'Agent' },
  { id: 9, firstName: 'Grace', lastName: 'Black', email: 'grace@example.com', role: 'Agent' },
  { id: 10, firstName: 'Grace', lastName: 'Black', email: 'grace@example.com', role: 'Agent' },
  { id: 11, firstName: 'Grace', lastName: 'Black', email: 'grace@example.com', role: 'Agent' },
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
    // Passing the specific user row data to the ViewUser page
    navigate(`view/${user.id}`, { state: { user } });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'role', headerName: 'Role', width: 120 },
    {
      field: 'actions', headerName: '', width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'center' , width: '100%'}}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleViewClick(params.row)}>
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
        width: '100vw',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
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
        onPageChange={(newPage) => setPage(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pageSizeOptions={[10]}
        rowHeight={42}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        sx={{
          height: '520px',
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
