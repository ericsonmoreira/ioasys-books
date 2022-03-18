import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              padding: 2,
            }}
            maxWidth="400px"
          >
            <Logo
              fill="#FFF"
              sx={{ width: '200px', height: '46px', marginBottom: '50px' }}
            />

            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              {...register('email')}
            />

            <TextField
              label="Senha"
              variant="outlined"
              margin="normal"
              type="password"
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              {...register('password')}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{
                  borderRadius: '44px',
                  backgroundColor: '#FFF',
                  color: '#B22E6F',
                  ':hover': {
                    backgroundColor: '#B22E6F',
                    color: '#FFF',
                  },
                }}
              >
                Entrar
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={5} md={6} />
      </Grid>
    </BasicLayout>
  );
};

export default LoginPage;
