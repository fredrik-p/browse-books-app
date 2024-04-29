import BooksPage from '../components/BookPage';
import { BookProvider } from '@/context/BookContext';

export default function Home() {
  return (
    <main>
      <BookProvider>
        <BooksPage />
      </BookProvider>
    </main>
  );
}
