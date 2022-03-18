import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#AB2680',
    },
    text: {
      primary: '#333333',
    },
  },
  typography: {
    fontFamily: 'Heebo',
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        container: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(2px)',
        },
      },
    },
  },
});
