import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import { ROUTER_NAMES } from './names';
import { PrivateRoutes } from './PrivateRoutes';

export const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTER_NAMES.LOGIN} element={<LoginPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path={ROUTER_NAMES.HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
};
