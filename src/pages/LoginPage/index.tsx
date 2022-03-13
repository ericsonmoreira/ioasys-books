import { Typography } from '@mui/material';
import logoSVG from '../../assets/logo.svg';
import BasicLayout from '../../layouts/BasicLayout';
import { LogoWrapper } from './styles';

const LoginPage: React.FC = () => {
  return (
    <BasicLayout>
      <LogoWrapper>
        <img src={logoSVG} />
        <Typography variant='h4'>Books</Typography>
      </LogoWrapper>
      <Typography>Login</Typography>
    </BasicLayout>
  );
};

export default LoginPage;
