// frontend/src/routes.js
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const routesForAdmin = [
  { text: 'Users', path: '/admin/users', icon: <AddCircleOutlineIcon /> },
  { text: 'Logs', path: '/admin/logs', icon: <ManageAccountsIcon /> },
];

export const routesForAgent = [
  { text: 'Clients', path: '/agent/clients', icon: <ReceiptIcon /> },
  { text: 'Logs', path: '/agent/logs', icon: <ManageAccountsIcon /> },
];