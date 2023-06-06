import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './context';

const ProtectedRoute = ({ children }) => {
  const { isUserLoggedIn } = React.useContext(AuthContext);
  const location = useLocation();

  console.log('test protected route', isUserLoggedIn);

  if (!isUserLoggedIn) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
