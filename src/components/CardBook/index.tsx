import { CardProps, Typography } from '@mui/material';
import { Book } from '../../services/getBooks';
import {
  Container,
  Content,
  ImgBook,
  ImgBookWrapper,
  Info,
  InfoSection,
} from './styles';
import noImgBook from '../../assets/no-book-img.png';

interface CardBookProps extends CardProps {
  book: Book;
}

const CardBook: React.FC<CardBookProps> = (props) => {
  const { book } = props;

  return (
    <Container variant="outlined">
      <Content>
        <ImgBookWrapper>
          <ImgBook src={book.imageUrl || noImgBook} />
        </ImgBookWrapper>
        <Info>
          <InfoSection>
            <Typography variant="subtitle1">{book.title}</Typography>
            <Typography variant="subtitle2" color="primary">
              {book.authors || 'Unknown Author'}
            </Typography>
          </InfoSection>
          <InfoSection>
            <Typography variant="caption" color="text.secondary">
              {`${book.pageCount} páginas`}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {`Editora ${book.publisher}`}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {`Publicado em ${book.published}`}
            </Typography>
          </InfoSection>
        </Info>
      </Content>
    </Container>
  );
};

export default CardBook;
