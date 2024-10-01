// frontend/src/routes.js
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const routesForAdmin = [
  { text: 'Users', path: '/admin/users', icon: <AddCircleOutlineIcon /> },
  { text: 'Transactions', path: '/admin/transactions', icon: <ManageAccountsIcon /> },
];

export const routesForAgent = [
  { text: 'Clients', path: '/agent/clients', icon: <ReceiptIcon /> },
  { text: 'Transactions', path: '/agent/transactions', icon: <ManageAccountsIcon /> },
];