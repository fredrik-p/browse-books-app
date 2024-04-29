import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Book } from '@/types/Book';

interface BookCardProps {
  book: Book;
  onOpen: (book: Book) => void;
}
const MotionCard = motion(Card);

const BookCard = ({ book, onOpen }: BookCardProps) => {
  const thumbnailUrl = book.imageLinks?.thumbnail || '/no-cover.png';

  return (
    <MotionCard
      sx={{ maxWidth: 250, height: 'auto', cursor: 'pointer' }}
      onClick={() => onOpen(book)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <CardMedia
        component="img"
        height="auto"
        image={thumbnailUrl}
        alt={`Cover for ${book.title}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            fontSize: '1rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.5',
          }}
          component="div"
        >
          {book.title || 'Title is not available'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.authors?.join(', ') || 'Unknown Author'}
        </Typography>
      </CardContent>
    </MotionCard>
  );
};

export default BookCard;
