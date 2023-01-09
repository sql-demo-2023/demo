import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

export default function NavHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NavHeader
          </Typography>
          <Link color="inherit" href="/">
            HOME
          </Link>
          <Link color="inherit" href="/i18n">
            i18n
          </Link>
          <Link color="inherit" href="/mui">
            MUI
          </Link>
          <Link color="inherit" href="/axios">
            axios
          </Link>
          <Link color="inherit" href="/reduxToolkit">
            redux-toolkit
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
