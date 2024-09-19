import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout'; // Import the drawer component
import AdminUsers from './AdminUsers'; // Import the AdminUsers component
import Box from '@mui/material/Box'; // Import the Box component from MUI

const Admin = () => {
  return (
    <Box sx={{ display: 'flex' }}> {/* Use MUI Box for the layout */}
      <Layout />
      <Box
        component="main"
        sx={{
          flexGrow: 1, // Allow the content to grow and fill the space
          bgcolor: '#f8f9fa', // Background color to cover the entire scrolling area
          p: 3,
          minHeight: '100vh', // Ensure it covers the full viewport height
          overflow: 'auto', // Enable scrolling if needed
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