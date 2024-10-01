import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);

  // If user state is still being initialized, you can return a loader or nothing
  if (user === null) {
    return <div>Loading...</div>; // or return null to show nothing during initialization
  }

  if (!user || !user.role) {
    // User is not logged in
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // User does not have permission to access this route
    return <Navigate to="/" replace />;
  }

  // User is authorized
  return <Outlet />;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProtectedRoute;