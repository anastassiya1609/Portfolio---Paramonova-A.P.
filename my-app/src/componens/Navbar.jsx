import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
          <a href='https://github.com/anastassiya1609' style={{ textDecoration: 'none', color: 'inherit' }}><h2>GitHub</h2> </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}