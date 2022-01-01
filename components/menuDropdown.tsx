
import * as React from 'react';
import { useRouter } from 'next/router'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export default function MenuDropdown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateHome = () => {
    router.push('/');
    setAnchorEl(null);
  }

  const navigateAapi = () => {
    router.push('/aapi/');
    setAnchorEl(null);
  }

  const navigateCooking = () => {
    router.push('/cooking/');
    setAnchorEl(null);
  }

  return (
    <div>
    <IconButton
      id="basic-button"
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={handleClick}
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={navigateHome}>Home</MenuItem>
      <MenuItem onClick={navigateAapi}>AAPI</MenuItem>
      <MenuItem onClick={navigateCooking}>Cooking</MenuItem>
    </Menu>
    </div>
  );
}