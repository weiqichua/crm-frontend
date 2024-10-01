// frontend/src/components/SidebarMenu.jsx
import { List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './SidebarMenu.css';

const SidebarMenu = () => {
  return (
    <div className="sidebar">
      <List>
        <NavLink to="/" className="link" activeClassName="active">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink to="/dashboard" className="link" activeClassName="active">
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </NavLink>
        <NavLink to="/orders" className="link" activeClassName="active">
          <ListItem button>
            <ListItemText primary="Orders" />
          </ListItem>
        </NavLink>
        <NavLink to="/products" className="link" activeClassName="active">
          <ListItem button>
            <ListItemText primary="Products" />
          </ListItem>
        </NavLink>
        <NavLink to="/customers" className="link" activeClassName="active">
          <ListItem button>
            <ListItemText primary="Customers" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default SidebarMenu;