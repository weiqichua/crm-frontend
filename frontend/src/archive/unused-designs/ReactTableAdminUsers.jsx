import {
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';

// Sample user data
const data = [
  { id: '1234', firstName: 'John', lastName: 'Smith', email: 'johnsmith@email.com', role: 'Admin' },
  { id: '0000', firstName: 'Tom', lastName: 'Smith', email: 'tomsmith@email.com', role: 'Agent' },
  // Add more users as needed
];

// Define the columns for React Table
const columns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'Actions',
    // Cell: ({ row }) => <ViewMoreButton row={row} />,
  },
];

// Custom Button Component
const ViewMoreButton = ({ row }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={() => alert(`Viewing user ${row.original.firstName} ${row.original.lastName}`)}
  >
    VIEW MORE
  </Button>
);

ViewMoreButton.propTypes = {
  row: PropTypes.shape({
    original: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

function AdminUsers() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <Box
      sx={{
        height: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            padding: 2,
            borderRadius: 1,
            boxShadow: 3,
            mb: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Users
          </Typography>
          <Button variant="contained" color="primary">
            ADD USER
          </Button>
        </Box>

        {/* React Table */}
        <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    key={column.id}
                    style={{
                      borderBottom: '1px solid black',
                      backgroundColor: '#f5f5f5',
                      padding: '10px',
                      textAlign: 'left',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      style={{
                        padding: '10px',
                        borderBottom: '1px solid black',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </Box>
  );
}

export default AdminUsers;