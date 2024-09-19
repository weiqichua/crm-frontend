import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout'; // Import the Layout component
import AdminUsers from './AdminUsers'; // Import the AdminUsers component
import Box from '@mui/material/Box'; // Import the Box component from MUI

const Admin = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}> {/* Full viewport height */}
      <Layout /> {/* Layout (AppBar) is placed here */}
      <Box
        sx={{
          flexGrow: 1, // Allow the content to grow and fill the space
          p: 3,
          overflow: 'auto', // Enable scrolling for the main content area if needed
          mt: '64px', // Adjust for the height of the AppBar (56px for mobile, 64px for desktop)
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100vw'
        }}
      >
        <Routes>
          <Route path="users" element={<AdminUsers />} />
          {/* Add other nested routes here */}
        </Routes>
      </Box>
    </Box>
  );
};

export default Admin;