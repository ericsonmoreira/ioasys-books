import { Container } from './styles';
import logoSVG from '../../assets/logo.svg';
import { Typography } from '@mui/material';

const Logo: React.FC = () => {
  return (
    <Container>
      <img src={logoSVG} />
      <Typography variant="h4">Books</Typography>
    </Container>
  );
};

export default Logo;
