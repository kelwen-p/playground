import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './layout.module.css';
import MenuDropdown from './menuDropdown';

export default function MainAppBar({title = 'Home'}) {
  return (
    <div className={styles.navBanner}>
      <AppBar position="static">
        <Toolbar>
          <MenuDropdown />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}