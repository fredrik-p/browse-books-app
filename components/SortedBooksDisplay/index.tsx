'use client';
import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import BookCard from '../BookCard';
import BookDetailsModal from '../BookDetailsModal';
import { Book } from '@/types/Book';

interface SortedBooksDisplayProps {
  books: Book[];
  sortOption: string;
  selectedBook: Book | null;
  onOpen: (book: Book) => void;
  onClose: () => void;
  modalOpen: boolean;
}

const SortedBooksDisplay = ({
  books,
  sortOption,
  selectedBook,
  onOpen,
  onClose,
  modalOpen,
}: SortedBooksDisplayProps) => {
  const sortedBooks = useMemo(() => {
    switch (sortOption) {
      case 'title-asc':
        return [...books].sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return [...books].sort((a, b) => b.title.localeCompare(a.title));
      case 'author-asc':
        return [...books].sort((a, b) =>
          a.authors && b.authors ? a.authors[0].localeCompare(b.authors[0]) : 0
        );
      case 'author-desc':
        return [...books].sort((a, b) =>
          a.authors && b.authors ? b.authors[0].localeCompare(a.authors[0]) : 0
        );
      case 'year-asc':
        return [...books].sort((a, b) =>
          (a.publishedDate?.split('-')[0] || '') <
          (b.publishedDate?.split('-')[0] || '')
            ? -1
            : 1
        );
      case 'year-desc':
        return [...books].sort((a, b) =>
          (a.publishedDate?.split('-')[0] || '') >
          (b.publishedDate?.split('-')[0] || '')
            ? -1
            : 1
        );
      case 'relevance':
      default:
        return books;
    }
  }, [books, sortOption]);

  return (
    <Grid container spacing={2} sx={{ mt: 4 }}>
      {sortedBooks.map((book, index) => (
        <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
          <BookCard book={book} onOpen={() => onOpen(book)} />
        </Grid>
      ))}
      {selectedBook && (
        <BookDetailsModal
          book={selectedBook}
          open={modalOpen}
          onClose={onClose}
        />
      )}
    </Grid>
  );
};

export default SortedBooksDisplay;
