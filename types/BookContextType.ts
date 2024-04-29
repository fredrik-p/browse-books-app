import { Book } from './Book';

export interface BookContextType {
  books: Book[];
  totalItems: number;
  fetchBooks: (query: string, page: number) => void;
}
