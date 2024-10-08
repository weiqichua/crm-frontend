// src/contexts/useUsers.js
import { useContext } from 'react';
import { UsersContext } from './UsersContext'; // Adjust the import path as needed

// Custom hook to use the UsersContext in components
export const useUsers = () => useContext(UsersContext);

