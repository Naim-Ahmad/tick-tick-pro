import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const drawerWidth = 240;


function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user, logout } = React.useContext(AuthContext)

  const navItems = [
    {
      route: "/",
      label: "Home"
    },
    {
      route: "/features",
      label: "Features"
    },
    {
      route: "/contact",
      label: "Contact"
    },
  ];

  if(user){
    navItems.push({route: "/dashboard", label: 'Dashboard'})
  }
  // console.log(navItems)

  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tick Tick Pro
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink style={{ textDecoration: 'none' }} to={item?.route} key={item?.label} >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center', color: 'black' }}>
                <ListItemText primary={item?.label} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Box>
        <Link to="/signUp">
          <Button variant='outlined'>
            Sign Up
          </Button>
        </Link>

        <Link to="/signIn">
          <Button style={{ marginLeft: '6px' }} variant='contained'>
            Sign in
          </Button>
        </Link>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  // console.log(logOut)
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success('Logout Successful!')
        navigate('/')
      })
      .catch(err => toast.error(err.code))
  }

  return (
    <Container>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar color="default" component="nav">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>

            <Typography
              variant="h6"
              component="div"
            >
              Tick Tick Pro
            </Typography>

            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <NavLink to={item?.route} key={item?.label}>
                  <Button size='medium' style={{ textTransform: 'capitalize', color: "rgba(0,0,0, 0.87)" }}>
                    {item?.label}
                  </Button>
                </NavLink>
              ))}
            </Box>

            {user ? <Button onClick={handleLogOut} variant='contained'>
              Sign Out
            </Button> : <Box display={{ xs: 'none', sm: 'block' }}>
              <Link to="/signUp">
                <Button variant='outlined'>
                  Sign Up
                </Button>
              </Link>

              <Link to="/signIn">
                <Button style={{ marginLeft: '6px' }} variant='contained'>
                  Sign in
                </Button>
              </Link>
            </Box>}
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor='right'
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
        </nav>
        {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
          ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
          Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
          delectus quo eius exercitationem tempore. Delectus sapiente, provident
          corporis dolorum quibusdam aut beatae repellendus est labore quisquam
          praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
          deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
          fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
          recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography>
      </Box> */}
      </Box>
    </Container>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;