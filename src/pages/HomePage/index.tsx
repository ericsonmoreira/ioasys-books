import { Grid } from '@mui/material';
import CardBook from '../../components/CardBook';
import { useGetBooks } from '../../hooks/useGetBooks';
// import { Container } from './styles';

const HomePage: React.FC = () => {
  const { data } = useGetBooks({ page: 1, amount: 12 });

  return (
    <div>
      <Grid container spacing={2}>
        {data?.data.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.title}>
            <CardBook book={book} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
