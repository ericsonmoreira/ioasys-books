import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';
import { useAuth } from '../../hooks/useAuth';
import BasicLayout from '../../layouts/BasicLayout';
import { ROUTER_NAMES } from '../../routes/names';
import schema from './schema';

interface LoginPageFromData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPageFromData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      await signIn({ email, password });

      navigate(ROUTER_NAMES.HOME);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <BasicLayout>
      <Logo fill="#FFF" sx={{ width: '198px', height: '40px' }} />

      <form onSubmit={onSubmit}>
        <TextField label="Email" variant="standard" {...register('email')} />
        <Typography variant="overline">{errors.email?.message}</Typography>

        <TextField
          label="Senha"
          variant="standard"
          type="password"
          {...register('password')}
        />
        <Typography variant="overline">{errors.password?.message}</Typography>

        <Button type="submit" variant="contained">
          Entrar
        </Button>
      </form>
    </BasicLayout>
  );
};

export default LoginPage;
