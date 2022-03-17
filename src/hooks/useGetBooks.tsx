import { useQuery } from 'react-query';
import { GetBooksQueryParams, getBooks } from '../services/getBooks';

function useGetBooks(params: GetBooksQueryParams) {
  const books = useQuery(['books', params], () => getBooks(params));

  return { ...books };
}

export { useGetBooks };
