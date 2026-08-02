import { createHashRouter } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Packages from '../pages/Packages';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const router = createHashRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'packages',
        element: <Packages />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
