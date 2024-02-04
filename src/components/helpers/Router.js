import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Header from '../header-section/Header'
import Sections from '../sections/Sections';
import Footer from '../Footer';
import AppECommerce from '../../e-commerce-store/src/AppECommerce';

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
      path: '/e-commerce-store/',
      element: <Navigate to="/e-commerce-store/products" />,
    },

    {
      path: '/e-commerce-store/products',
      element: (
        <AppECommerce />
      ),
    },

    {
      path: '/e-commerce-store/basket',
      element: (
        <AppECommerce />
      ),
    }
  ]);

  return <RouterProvider router={router} />;
};