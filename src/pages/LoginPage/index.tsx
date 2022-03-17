import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Logo from '../../components/Logo';
import BasicLayout from '../../layouts/BasicLayout';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { useAuth } from '../../hooks/useAuth';

interface LoginPageFromData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();

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
    await signIn({ email, password });
  });

  return (
    <BasicLayout>
      <Logo />
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
