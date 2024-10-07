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
                  {/* Add other admin routes here */}
                </Route>
          </Route>

          {/* Protected Agent Routes */}
          <Route element={<ProtectedRoute allowedRoles={['agent']} />}>
            <Route path="/agent" element={<Agent />}>
              {/* Add agent nested routes here */}
            </Route>
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;