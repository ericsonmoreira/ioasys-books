import api from '../api';

export interface Book {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

export interface GetBooksData {
  data: Book[];
  page: number;
  totalPages: number;
  totalItems: number;
}

export interface GetBooksQueryParams {
  page?: number;
  amount?: number;
  title?: string;
  category?: string;
}

export const getBooks = async (
  params: GetBooksQueryParams
): Promise<GetBooksData> => {
  const { data } = await api.get('/books', { params });
  return data;
};
