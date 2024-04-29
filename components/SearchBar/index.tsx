import {
  TextField,
  Box,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isScrolled: boolean;
}

const SearchBar = ({ onSearch, isScrolled }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'fixed',
        zIndex: 50,
        backgroundColor: 'background.paper',
        top: 0,
        pt: isScrolled ? 3 : 6,
        pb: 3,
        transition: 'padding-top 0.3s ease',
      }}
    >
      {!isScrolled && (
        <Typography sx={{ mb: 2 }} variant="h5">
          The encyclopedia of books
        </Typography>
      )}

      <TextField
        variant="outlined"
        label="Search for books"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{
          width: {
            xs: '90%',
            sm: '80%',
            md: '550px',
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: 50,
            '& input.MuiInput-input': { marginLeft: '10px' },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch} edge="end" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
