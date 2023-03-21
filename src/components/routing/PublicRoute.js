import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';

export default function PublicRoute({ children }) {
  const checkLogin = useAuth();

  return !checkLogin ? children : <Navigate to="/user" />;
}
