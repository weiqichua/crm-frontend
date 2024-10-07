import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Create the UsersContext
const UsersContext = createContext();

// Custom hook to use the UsersContext in components
export const useUsers = () => useContext(UsersContext);

// UsersProvider component to wrap around components that need user data
export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', role: 'Admin' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', role: 'Admin' },
    { id: 4, firstName: 'Alice', lastName: 'Brown', email: 'alice@example.com', role: 'Admin' },
    { id: 5, firstName: 'Charlie', lastName: 'Davis', email: 'charlie@example.com', role: 'Admin' },
    { id: 6, firstName: 'Eve', lastName: 'White', email: 'eve@example.com', role: 'Admin' },
    { id: 7, firstName: 'Frank', lastName: 'Green', email: 'frank@example.com', role: 'Admin' },
    { id: 8, firstName: 'Grace', lastName: 'Black', email: 'grace@example.com', role: 'Agent' },
    { id: 9, firstName: 'Henry', lastName: 'Orange', email: 'henry@example.com', role: 'Agent' },
    { id: 10, firstName: 'Ivy', lastName: 'Purple', email: 'ivy@example.com', role: 'Admin'},
    { id: 11, firstName: 'Ivy', lastName: 'Black', email: 'ivyblack@example.com', role: 'Admin'},
  ]);

  const updateUserInList = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  UsersProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
   (
    <UsersContext.Provider value={{ users, updateUserInList }}>
      {children}
    </UsersContext.Provider>
  ))
};
