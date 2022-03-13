import { Container } from './styles';

const BasicLayout: React.FC = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default BasicLayout;
