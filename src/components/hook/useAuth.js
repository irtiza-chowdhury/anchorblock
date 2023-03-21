/* eslint-disable eqeqeq */
import { useSelector } from 'react-redux';

export default function useAuth() {
  const auth = useSelector((state) => state.auth);

  if (auth?.accessToken) {
    return true;
  }
  if (!auth?.accessToken) {
    return false;
  }
}
