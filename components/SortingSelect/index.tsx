import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

interface SortingSelectProps {
  sortOption: string;
  onSortChange: (event: SelectChangeEvent<string>) => void;
  options: { value: string; label: string }[];
  label?: string;
}

const SortingSelect = ({
  sortOption,
  onSortChange,
  options,
  label,
}: SortingSelectProps) => {
  return (
    <FormControl fullWidth size="small" sx={{ mt: 2 }}>
      <InputLabel id="sort-label">{label || 'Sort By'}</InputLabel>
      <Select
        labelId="sort-label"
        value={sortOption || 'relevance'}
        label={label || 'Sort By'}
        onChange={onSortChange}
        sx={{
          width: {
            xs: '100%',
            sm: '150px',
          },
          '& .MuiOutlinedSelect-root': {
            borderRadius: 50,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortingSelect;
