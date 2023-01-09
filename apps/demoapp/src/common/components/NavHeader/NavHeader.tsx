import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NavItem from './NavItem';

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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'space-between',
            }}
          >
            <NavItem link="" text="HOME" />
            <NavItem link="news" text="I18N" />
            <NavItem link="mui" text="MUI" />
            <NavItem link="axios" text="Axios" />
            <NavItem link="reduxToolkit" text="Redux-toolkit" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
