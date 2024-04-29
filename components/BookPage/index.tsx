'use client';
import { useContext, useEffect, useState } from 'react';
import { Box, Pagination, SelectChangeEvent, Typography } from '@mui/material';
import { Book } from '@/types/Book';
import SearchBar from '../SearchBar';
import ScrollToTop from '../ScrollToTop';
import SortingSelect from '../SortingSelect';
import { BookContext } from '@/context/BookContext';
import Loading from '@/app/loading';
import dynamic from 'next/dynamic';

const SortedBooksDisplay = dynamic(() => import('../SortedBooksDisplay'), {
  loading: () => <Loading />,
});

const BooksPage = () => {
  const { books, fetchBooks, totalItems } = useContext(BookContext);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>('relevance');
  const [query, setQuery] = useState<string>('react');
  const itemsPerPage = 36;

  useEffect(() => {
    fetchBooks(query, currentPage);
  }, [query, currentPage, fetchBooks]);

  const handleSearch = (query: string) => {
    setQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortOption(event.target.value);
  };

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setModalOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = 20;
    if (window.scrollY > offset) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{}}>
      <SearchBar onSearch={handleSearch} isScrolled={isScrolled} />
      <Box sx={{ padding: 3, mt: 18 }}>
        {books.length > 0 && (
          <Typography sx={{ mb: 3, mt: 2 }}>
            {`${totalItems} books found for '${query}'`}
          </Typography>
        )}
        <SortingSelect
          sortOption={sortOption}
          onSortChange={handleSortChange}
          options={[
            { value: 'relevance', label: 'Relevance' },
            { value: 'title-asc', label: 'Title (A-Z)' },
            { value: 'title-desc', label: 'Title (Z-A)' },
            { value: 'author-asc', label: 'Author (A-Z)' },
            { value: 'author-desc', label: 'Author (Z-A)' },
            { value: 'year-asc', label: 'Year (Old-New)' },
            { value: 'year-desc', label: 'Year (New-Old)' },
          ]}
        />
        <SortedBooksDisplay
          books={books}
          sortOption={sortOption}
          selectedBook={selectedBook}
          onOpen={handleOpenModal}
          onClose={handleCloseModal}
          modalOpen={modalOpen}
        />
        {books.length > 0 && (
          <>
            <Pagination
              count={Math.ceil(totalItems / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              sx={{
                mt: 6,
                mb: { xs: 0, md: 0 },
                display: 'flex',
                justifyContent: 'center',
              }}
            />
            <ScrollToTop />
          </>
        )}
      </Box>
    </Box>
  );
};

export default BooksPage;
