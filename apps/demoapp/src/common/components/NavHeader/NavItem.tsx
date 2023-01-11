import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

const NavItem: React.FC<{ link: string; text: string }> = ({ link, text }) => {
  return (
    <Button>
      <Link
        color="inherit"
        href={`/${link}`}
        style={{ textDecoration: 'none', color: 'white' }}
      >
        {text}
      </Link>
    </Button>
  );
};
export default NavItem;
