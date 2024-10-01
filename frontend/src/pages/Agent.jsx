import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout'; // Assuming this is your AppBar layout
import Box from '@mui/material/Box';

const Agent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Layout />
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: 'auto',
          mt: '64px', // Adjust for AppBar height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100vw',
        }}
      >
        <Outlet /> {/* Renders the matched child route */}
      </Box>
    </Box>
  );
};

export default Agent;
