// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import AdminUsers from './pages/AdminUsers';
import CreateUser from './pages/CreateUser';
import ViewUser from './pages/ViewUser';
import Agent from './pages/Agent';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';
import { UsersProvider } from './contexts/UsersContext';
import ClientsList from './pages/ClientsList';
import CreateClient from './pages/CreateClient';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          <Route path="/" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route path="/admin" element={
                  <UsersProvider>
                    <Admin />
                  </UsersProvider>
              }>
                  <Route path="users" element={<AdminUsers />} />
                  <Route path="users/create" element={<CreateUser />} />
                  <Route path="users/view/:id" element={<ViewUser />} />
                </Route>
          </Route>


          {/* Protected Agent Routes */}
          <Route element={<ProtectedRoute allowedRoles={['agent']} />}>
            <Route path="/agent" element={<Agent />}>
              {/* List of Clients */}
              <Route path="clients" element={<ClientsList />} />
              {/* Create a New Client */}
              <Route path="clients/create" element={<CreateClient />} />
              {/* View/Edit/Delete a Specific Client */}
              <Route path="clients/view/:id" element={<div>ViewClient</div>}>
                  {/* View all transactions for the client */}
                  <Route path="transactions" element={<div>ClientTransactions</div>} /> 
                  {/* View all accounts of the client */}
                  <Route path="accounts" element={<div>ClientAccounts</div>} />  
                  {/* Create a new account for the client */}
                  <Route path="accounts/create" element={<div>CreateAccount</div>} />  
                  {/* View/Edit/Delete a specific account */}
                  <Route path="accounts/view/:accountId" element={<div>ViewAccount</div>}>
                      {/* View transactions belonging to this account */}
                      <Route path="transactions" element={<div>AccountTransactions</div>} />  
                  </Route>
              </Route>
            </Route>
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;