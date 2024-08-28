import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoutes = (WrappedComponent) => {
  return (props) => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      return <Navigate to="/signin" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default AuthRoutes;