import { CssBaseline, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import BasicLayout from './layouts/BasicLayout';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BasicLayout>
        <CssBaseline />
        <Typography>Ola mundo</Typography>
      </BasicLayout>
    </ThemeProvider>
  );
}

export default App;
