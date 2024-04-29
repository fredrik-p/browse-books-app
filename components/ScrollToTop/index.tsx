'use client';
import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 200) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    showScroll && (
      <IconButton
        onClick={scrollTop}
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
          borderRadius: '50%',
          width: 48,
          height: 48,
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    )
  );
};

export default ScrollToTop;
