import React, { useState } from 'react';
import './App.css';
import { Drawer, List, ListItem, ListItemText, IconButton, Box, Toolbar, AppBar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { HeaderComponent } from './components/Header/Header';
import Main from './components/Main';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <HeaderComponent />

      {/* Menu icon for small screens */}
      <AppBar position="static" sx={{ display: { md: 'none' } }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        variant="temporary"
        sx={{ display: { xs: 'block', md: 'none' } }} // Only show drawer on small screens
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Resume', 'Projects', 'Contact'].map((text) => (
              <ListItem button component={Link} to={`/${text}`} key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Page Content */}
      <Box sx={{ p: 3 }}>
        <Main />
      </Box>
    </Box>
  );
}

export default App;