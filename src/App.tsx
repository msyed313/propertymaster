import { type FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import './App.css';
import Lettings from './Pages/Lettings';
import Sales from './Pages/Sales';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContatcUs';

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path:"",
          element: <Home />
        },
        {
          path:"/lettings",
          element:<Lettings category='residential'/>
        },
        {
          path:"/lettings",
          element:<Lettings category='commercial' />
        },
        {
          path:"/sales",
          element:<Sales/>
        },
        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/contact",
          element:<ContactUs/>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
