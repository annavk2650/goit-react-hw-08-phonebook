import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function PublicRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  return isLoggedIn || isRefreshing ? <Navigate to={'/contacts'} /> : <Outlet />;
}
