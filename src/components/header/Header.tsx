import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, useTheme, useMediaQuery, Drawer, Box, Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
import SideNavBar from '../sideBar/SideNavBar';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Works', 'Contact'];

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            PORTFOLIO
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button key={item} color="inherit" href={`#${item.toLowerCase()}`}>
                  {item}
                </Button>
              ))}
            </Box>
          )}

          {/* Dark mode toggle */}
          <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
            {/* {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />} */}
          </IconButton>

          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <SideNavBar closeDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};

export default Header;