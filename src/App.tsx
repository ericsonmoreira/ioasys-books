import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MainRoutes } from './routes';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </ThemeProvider>
        <ToastContainer position="top-center" />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
