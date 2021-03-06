import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import noImgBook from '../../assets/no-book-img.png';
import { Book } from '../../services/getBooks';
import CustonQuotesIcon from '../CustonQuotesIcon';
import InformationRow from './InformationRow';
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction } from 'react';
interface ViewBookDialogProps extends DialogProps {
  book: Book | null;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ViewBookDialog: React.FC<ViewBookDialogProps> = (props) => {
  const { book, setOpen, ...rest } = props;

  const matches = useMediaQuery('(max-width:740px)');

  return (
    <Dialog {...rest} maxWidth="md">
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {book?.title}
        <IconButton edge="end" onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: matches ? 'column' : 'row',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              mr: matches ? 0 : 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={book?.imageUrl || noImgBook}
              width="100%"
              style={{ maxWidth: '359px' }}
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
              <Typography variant="h4" noWrap>
                {book?.title}
              </Typography>
              <Typography color="primary">
                {book?.authors.join(', ') || 'Unknown Author'}
              </Typography>
            </Box>
            <Box>
              <Box>
                <Typography variant="overline" gutterBottom>
                  Informa????es
                </Typography>
                <InformationRow label="P??ginas" value={book?.pageCount} />
                <InformationRow label="Editora" value={book?.publisher} />
                <InformationRow label="Publica????o" value={book?.published} />
                <InformationRow label="Idioma" value={book?.language} />
                <InformationRow label="T??tulo Original" value={book?.title} />
                <InformationRow label="ISBN-10" value={book?.isbn10} />
                <InformationRow label="ISBN-13" value={book?.isbn13} />
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
