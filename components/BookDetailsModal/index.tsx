import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Book } from '@/types/Book';

interface BookDetailsModalProps {
  book: Book;
  open: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '70%', md: '50%' },
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

const BookDetailsModal = ({ book, open, onClose }: BookDetailsModalProps) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {book.title}
      </Typography>
      <Typography
        id="modal-modal-description"
        sx={{
          mt: 2,
          maxHeight: '50vh',
          pr: 2,
          overflow: 'auto',
          lineHeight: '1.8',
        }}
      >
        {book.description}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button onClick={onClose}>Close</Button>
      </Box>
    </Box>
  </Modal>
);

export default BookDetailsModal;
