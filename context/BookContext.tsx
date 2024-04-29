'use client';
import React, { createContext, useState, useCallback, ReactNode } from 'react';
import type { Book } from '@/types/Book';
import type { BookContextType } from '@/types/BookContextType';
import { fetchBooksFromAPI } from '@/services/bookService';

export const BookContext = createContext<BookContextType>({
  books: [],
  totalItems: 0,
  fetchBooks: () => Promise.resolve(),
});

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const fetchBooks = useCallback(async (query: string, page: number) => {
    const { books, totalItems } = await fetchBooksFromAPI(query, page);
    setBooks(books);
    setTotalItems(totalItems);
  }, []);

  return (
    <BookContext.Provider value={{ books, totalItems, fetchBooks }}>
      {children}
    </BookContext.Provider>
  );
};
