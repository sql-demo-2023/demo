import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#2C3639',
      contrastText: 'white',
    },
    secondary: {
      main: '#fff8ea',
      contrastText: '#594545',
    },
    vintage: {
      main: '#939B62',
    },
    error: {
      main: '#B73E3E',
    },
  },
});

export default theme;
