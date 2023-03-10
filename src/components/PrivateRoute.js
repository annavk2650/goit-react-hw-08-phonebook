import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  return isLoggedIn || isRefreshing ? <Outlet /> : <Navigate to={'/login'} />;
}
