import React from 'react';
import { Grid, Skeleton, Box } from '@mui/material';

const LoadingSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(6)).map((_, index) => (
        <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
          <Box sx={{ width: 250, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={250} height={308} />
            <Box sx={{ pr: 2 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingSkeleton;
