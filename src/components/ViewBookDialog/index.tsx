import { Dialog, DialogContent, DialogProps, Typography } from '@mui/material';
import { Box } from '@mui/system';
import noImgBook from '../../assets/no-book-img.png';
import { Book } from '../../services/getBooks';
import CustonQuotesIcon from '../CustonQuotesIcon';

interface ViewBookDialogProps extends DialogProps {
  book: Book | null;
}

const ViewBookDialog: React.FC<ViewBookDialogProps> = (props) => {
  const { book, ...rest } = props;

  return (
    <Dialog {...rest} maxWidth="md">
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box sx={{ mr: 4 }}>
            <img
              src={book?.imageUrl || noImgBook}
              width="350px"
              height="512px"
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="h4">{book?.title}</Typography>
              <Typography color="primary">
                {book?.authors.join(', ') || 'Unknown Author'}
              </Typography>
            </Box>
            <Box>
              <Box>
                <Typography variant="overline" gutterBottom>
                  Informações
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="body2">Páginas</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book?.pageCount}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="body2">Editora</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book?.publisher}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="body2">Publicação</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book?.published}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="body2">Idioma</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book?.language}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="overline" gutterBottom>
                Resenha da editora
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <CustonQuotesIcon sx={{ mr: 1 }} />
                {book?.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ViewBookDialog;
