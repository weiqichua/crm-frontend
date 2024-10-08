// src/components/Layout.jsx
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../contexts/AuthContext';
import { routesForAdmin, routesForAgent } from '../components/Routes';

export default function Layout() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const routes = user.role === 'admin' ? routesForAdmin : routesForAgent;

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to login page
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" noWrap component="div">
            Welcome, {user.role === 'admin' ? 'Admin' : 'Agent'} {user.username}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <List sx={{ display: 'flex', flexDirection: 'row', p: 0, m: 0 }}>
              {routes.map((route) => (
                <ListItem key={route.text} disablePadding>
                  <ListItemButton component={Link} to={route.path}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>{route.icon}</ListItemIcon>
                    <ListItemText primary={route.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Button
              color="inherit"
              variant="outlined"
              onClick={handleLogout}
              endIcon={<LogoutIcon />}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}