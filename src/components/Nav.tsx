import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ScanMyRide
        </Typography>

        {/* links for larger screens */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Home</Link>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Profile</Link>
          <Link to="/login" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Login</Link>
        </Box>

        {/* hamburger menu icon for smaller screens */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { sm: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* (side menu) for smaller screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <MenuItem component={Link} to="/">Home</MenuItem>
          <MenuItem component={Link} to="/profile">Profile</MenuItem>
          <MenuItem component={Link} to="/login">Login</MenuItem>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Nav;

