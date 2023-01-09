import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#FF7B54',
      contrastText: 'white',
    },
    secondary: {
      main: '#FFB26B',
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
