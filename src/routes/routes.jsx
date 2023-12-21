import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';

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
        path: 'dashboard',
        element: <Dashboard/>,
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
  }
])

export default router;