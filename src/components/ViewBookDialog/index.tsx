import { Dialog, DialogProps, DialogTitle, Typography } from '@mui/material';
import { Book } from '../../services/getBooks';

interface ViewBookDialogProps extends DialogProps {
  book: Book | null;
}

const ViewBookDialog: React.FC<ViewBookDialogProps> = (props) => {
  const { book, ...rest } = props;

  return (
    <Dialog {...rest}>
      <DialogTitle>Teste</DialogTitle>
      <Typography>{book?.title}</Typography>
    </Dialog>
  );
};

export default ViewBookDialog;
