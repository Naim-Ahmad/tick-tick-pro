import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import tickIcon from '../../assets/ticktickicon.png';

const drawerWidth = 240;

function Sidebar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItem = [
    { label: "My Profile", route: "/dashboard", icon: <AccountCircleIcon /> },
    { label: "All Task", route: "/dashboard/allTask", icon: <AlignHorizontalLeftIcon /> },
  ]

  const mainLayoutItem = [
    {
      route: "/",
      label: "Home",
      icon: <HomeWorkIcon />
    },

  ]

  const drawer = (
    <div>
      <Toolbar>
      <Typography
          variant="h6"
          component="div"
        >
          <img src={tickIcon} style={{ width: '10rem' }} />
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navItem.map((item) => (
          <Link style={{ color: 'black', textDecoration: 'none' }} key={item?.label} to={item?.route}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item?.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {mainLayoutItem.map((item) => (
          <Link style={{ color: 'black', textDecoration: 'none' }} key={item?.label} to={item?.route}>
            <ListItem key={item?.label} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item?.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  )
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
