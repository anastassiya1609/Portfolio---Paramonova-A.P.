import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d6bea9',
    },
    background: {
      default: '#0e0e0e',
      paper: '#1c1c1c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#d6bea9',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default theme;