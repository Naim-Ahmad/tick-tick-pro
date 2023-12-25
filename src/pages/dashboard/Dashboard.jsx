import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const drawerWidth = 240;

function Dashboard() {


  return (
   
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Sidebar />
        </Box>

        <Box
          component="main"
          bgcolor="#F3F6F9"
          sx={{  width: { sm: `calc(100% - ${drawerWidth}px)` }, minHeight: '100svh' }}
        >
          
         <Outlet></Outlet>

        </Box>
      </Box>
   
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
