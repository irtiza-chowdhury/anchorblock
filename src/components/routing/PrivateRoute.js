import { Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';

export default function PrivateRoute({ children }) {
  const checkLogin = useAuth();

  return checkLogin ? children : <Navigate to="/" />;
}
