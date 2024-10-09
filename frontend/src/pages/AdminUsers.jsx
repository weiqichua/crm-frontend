import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../contexts/useUsers';
import TablePaper from '../components/TablePaper'; // Import the TablePaper component

function AdminUsers() {
  const { users } = useUsers(); // Fetch users from context
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

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

  // Define columns for the DataGrid
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
        <Button
          variant="contained"
          size="small"
          onClick={() => handleViewClick(params.row)}
          sx = {{
            marginBottom: 2
          }}
        >
          View More
        </Button>
      ),
    },
  ];

  return (
    <TablePaper
      title="Users"
      rows={users.filter((user) => user.status !== 'disabled')}
      columns={columns}
      page={page}
      setPage={setPage}
      onAddClick={handleAddUserClick}
    />
  );
}

export default AdminUsers;
