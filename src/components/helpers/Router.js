import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Header from '../header-section/Header'
import Sections from '../sections/Sections';
import Footer from '../Footer';
import App from '../../e-commerce-store/src/App';

export const Router = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
            <Header />
            <Sections />
            <Footer />
        </> 
      ),
    },

    {
      path: '/e-commerce-store',
      element: (
        <App />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};