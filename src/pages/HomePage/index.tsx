import {
  Box,
  CircularProgress,
  Container as MUIContainer,
  Grid,
  Pagination,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import CardBook from '../../components/CardBook';
import CustonToolBar from '../../components/CustonToolBar';
import ViewBookDialog from '../../components/ViewBookDialog';
import { useGetBooks } from '../../hooks/useGetBooks';
import BackGroundImageLayout from '../../layouts/BackGroundImageLayout';
import { Book } from '../../services/getBooks';

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetBooks({ page, amount: 12 });

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (book: Book) => {
    setSelectedBook(book);
    setOpenDialog(true);
  };

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <BackGroundImageLayout>
      <MUIContainer
        maxWidth="xl"
        sx={{
          paddingTop: 4,
        }}
      >
        <CustonToolBar />
        {isLoading && <CircularProgress />}
        <Grid container spacing={2}>
          {data?.data.map((book) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={book.id}
              onClick={() => handleOpenDialog(book)}
              sx={{ cursor: 'pointer' }}
            >
              <CardBook book={book} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: 'flex',
            paddingX: 1,
            paddingY: 2,
            justifyContent: 'flex-end',
          }}
        >
          <Pagination
            variant="outlined"
            count={Math.ceil(data?.totalPages || 0)}
            onChange={handleChangePage}
          />
        </Box>
      </MUIContainer>
      <ViewBookDialog
        book={selectedBook}
        open={openDialog}
        setOpen={setOpenDialog}
      />
    </BackGroundImageLayout>
  );
};

export default HomePage;
