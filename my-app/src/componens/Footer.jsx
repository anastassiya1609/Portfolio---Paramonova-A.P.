import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ py: 4, textAlign: 'center', backgroundColor: 'background.paper' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} by Paramonova Anastassiya. Все права защищены.
      </Typography>
    </Box>
  );
}