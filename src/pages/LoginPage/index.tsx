import { TextField } from '@mui/material';
import Logo from '../../components/Logo';
import BasicLayout from '../../layouts/BasicLayout';

const LoginPage: React.FC = () => {
  return (
    <BasicLayout>
      <Logo />
      <form>
        <TextField label="Email" variant="standard" />
        <TextField label="Senha" variant="standard" type="password" />
      </form>
    </BasicLayout>
  );
};

export default LoginPage;
