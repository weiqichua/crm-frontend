import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create the UsersContext
export const UsersContext = createContext();

// UsersProvider component to wrap around components that need user data
export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', role: 'Admin', status: 'active' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', role: 'Admin', status: 'active' },
    { id: 4, firstName: 'Alice', lastName: 'Brown', email: 'alice@example.com', role: 'Admin', status: 'active' },
    { id: 5, firstName: 'Charlie', lastName: 'Davis', email: 'charlie@example.com', role: 'Admin', status: 'active' },
    { id: 6, firstName: 'Eve', lastName: 'White', email: 'eve@example.com', role: 'Admin', status: 'active' },
    { id: 7, firstName: 'Frank', lastName: 'Green', email: 'frank@example.com', role: 'Admin', status: 'active' },
    { id: 8, firstName: 'Grace', lastName: 'Black', email: 'grace@example.com', role: 'Agent', status: 'active' },
    { id: 9, firstName: 'Henry', lastName: 'Orange', email: 'henry@example.com', role: 'Agent', status: 'active' },
    { id: 10, firstName: 'Ivy', lastName: 'Purple', email: 'ivy@example.com', role: 'Admin', status: 'active' },
    { id: 11, firstName: 'Ivy', lastName: 'Black', email: 'ivyblack@example.com', role: 'Admin', status: 'disabled' },
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
    <UsersContext.Provider value={{ users, setUsers, updateUserInList }}>
      {children}
    </UsersContext.Provider>
  ))
};
