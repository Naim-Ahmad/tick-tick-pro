import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Contacts from '../pages/contacts/Contacts';
import Dashboard from '../pages/dashboard/Dashboard';
import Content from '../pages/dashboard/allTask/Content';
import MyProfile from '../pages/dashboard/myProfile/MyProfile';
import Features from '../pages/features/Features';
import Home from '../pages/home/Home';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/features',
        element: <Features/>,
      },
      {
        path: '/contact',
        element: <Contacts/>,
      },
     
      {
        path: 'signIn',
        element: <SignIn/>,
      },
      {
        path: 'signUp',
        element: <SignUp/>,
      },
    ]
  },

  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        index: true,
        element: <MyProfile/>
      },
      {
        path: 'allTask',
        element:  <Content />
      }
    ]
  },

])

export default router;