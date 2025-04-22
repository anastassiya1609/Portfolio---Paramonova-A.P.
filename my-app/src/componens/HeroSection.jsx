import React from 'react';
import { Box, Typography } from '@mui/material';
import Stack from './Stack';




export default function HeroSection() {
  return (
    <Box sx={{ py: 17, textAlign: 'center' }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Привет, я WEB разработчик
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Мой стэк технологий
      </Typography>

    <Stack/>
    </Box>
  );
}
