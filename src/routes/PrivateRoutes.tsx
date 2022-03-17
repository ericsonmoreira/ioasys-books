import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTER_NAMES } from './names';

export const PrivateRoutes: React.FC = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to={ROUTER_NAMES.LOGIN} replace />;
};