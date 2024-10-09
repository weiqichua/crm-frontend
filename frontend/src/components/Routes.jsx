// frontend/src/routes.js
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const routesForAdmin = [
  { text: 'Users', path: '/admin/users', icon: <ManageAccountsIcon /> },
  { text: 'Logs', path: '/admin/logs', icon: <ReceiptIcon /> },
];

export const routesForAgent = [
  { text: 'Clients', path: '/agent/clients', icon: <ManageAccountsIcon /> },
  { text: 'Logs', path: '/agent/logs', icon: <ReceiptIcon /> },
];