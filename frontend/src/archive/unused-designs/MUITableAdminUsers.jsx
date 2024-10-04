import {
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Box,
  } from '@mui/material';
  
  function AdminUsers() {
    // Sample user data
    const users = [
      { id: '1234', firstName: 'John', lastName: 'Smith', email: 'johnsmith@email.com', role: 'Admin' },
      { id: '0000', firstName: 'Tom', lastName: 'Smith', email: 'tomsmith@email.com', role: 'Agent' },
      // Add more users as needed
    ];
  
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
        <Container sx={{ }}>
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f5f5f5', // Background color for the heading
              padding: 1,
              borderRadius: 1,
              boxShadow: 1,
              mb: 1, // Margin bottom to separate from the table
            }}
          >
            <Typography variant="h5" gutterBottom>
              Users
            </Typography>
            <Button variant="contained" color="primary" sx={{ mb: 2 }}>
              ADD USER
            </Button>
      </Box>
  
          {/* User Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        VIEW MORE
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    );
  }
  
  export default AdminUsers;