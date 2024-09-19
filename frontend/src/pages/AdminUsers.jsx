import React, { useState } from 'react';
import { Table, Button, Pagination } from 'react-bootstrap';
import './AdminUsers.css'; // Import the CSS file

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User' },
  { id: 6, name: 'Eve White', email: 'eve@example.com', role: 'Admin' },
  { id: 7, name: 'Frank Green', email: 'frank@example.com', role: 'User' },
  { id: 8, name: 'Grace Black', email: 'grace@example.com', role: 'Admin' },
  // Add more mock users as needed
];

function AdminUsers() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = mockUsers.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate total pages
  const totalPages = Math.ceil(mockUsers.length / itemsPerPage);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <div className="container-fluid d-flex flex-column vh-100 w-100 mt-5">
      <h1>Manage Users</h1>
      <div className="table-responsive">
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Button variant="warning" className="mr-2">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Pagination className="justify-content-center mt-3">
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
  );
}

export default AdminUsers;