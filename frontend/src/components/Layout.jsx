import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const getUserRole = () => localStorage.getItem('role'); // Example

const drawerWidth = 240;

const routesForAdmin = [
  { text: 'Users', path: '/admin/users', icon: <AddCircleOutlineIcon /> },
  { text: 'Transactions', path: '/admin/transactions', icon: <ManageAccountsIcon /> },
];

const routesForAgent = [
  { text: 'Clientsasd', path: '/agent/clients', icon: <ReceiptIcon /> },
  { text: 'Transactions', path: '/agent/transactions', icon: <ManageAccountsIcon /> },
];

export default function Layout() {
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function

  const userRole = getUserRole(); // 'admin' or 'agent'
  const routes = userRole === 'admin' ? routesForAdmin : routesForAgent;

  const handleLogout = () => {
    // Clear user session or token here, if applicable
    localStorage.removeItem('role'); // Example of clearing user role
    localStorage.removeItem('token'); // Clear token if stored
    navigate('/'); // Redirect to login page
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" noWrap component="div">
            {userRole === 'admin' ? 'Admin Dashboard' : 'Agent Dashboard'}
          </Typography>
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
          {routes.map((route) => (
            <ListItem key={route.text} disablePadding>
              <ListItemButton component={Link} to={route.path}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>          
        
          <Button sx = {{textTransform: 'none' }} color="inherit" variant = "contained" onClick={handleLogout} endIcon = {<LogoutIcon />} >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography noWrap component="div">
                Logout
              </Typography>
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" noWrap component="div">
            UBS
          </Typography>
        </Toolbar>
        <Divider />

        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          {routes.map((route) => (
            <ListItem key={route.text} disablePadding>
              <ListItemButton component={Link} to={route.path}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}