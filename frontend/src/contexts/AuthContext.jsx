import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const mockUsers = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'agentid2', password: 'agent123', role: 'agent' },
  { id: 3, username: 'agentid3', password: 'agent123', role: 'agent' },
  { id: 4, username: 'agentid4', password: 'agent123', role: 'agent' },
];

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage, if it exists
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (username, password) => {
    const foundUser = mockUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    // Optional: If you want to ensure the user is set from localStorage on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};