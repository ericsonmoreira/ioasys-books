import LogoutIcon from '@mui/icons-material/Logout';
import { Box, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROUTER_NAMES } from '../../routes/names';
// import Logo from '../Logo';

const CustonToolBar: React.FC = () => {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate(ROUTER_NAMES.LOGIN);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
      }}
    >
      {/* <Logo /> */}
      {/* TODO: colocar aqui o logo */}
      <Typography component="div" sx={{ mr: 2 }}>
        Bem vindo, {user?.name}!
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component="div" sx={{ mr: 2 }}>
          Bem vindo, {user?.name}!
        </Typography>
        <IconButton
          sx={{ border: 1, borderColor: 'rgba(51, 51, 51, 0.2)' }}
          onClick={handleLogout}
          size="small"
        >
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CustonToolBar;
