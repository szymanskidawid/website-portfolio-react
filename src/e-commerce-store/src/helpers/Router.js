import Page from '../components/Page';
import ProductGrid from '../components/main-section/ProductGrid';
import BasketGrid from '../components/basket-section/BasketGrid';
import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import { Route } from 'wouter';

export const Router = ({ totalPrice }) => {
  const { basket } = useContext(BasketContext);

  return (
    <>
      <Route path="/e-commerce-store/products">
        <Page basket={basket} totalPrice={totalPrice}>
          <ProductGrid />
        </Page>
      </Route>
      <Route path="/e-commerce-store/basket">
        <Page basket={basket} totalPrice={totalPrice}>
          <BasketGrid basketTotalPrice={totalPrice()} />
        </Page>
      </Route>
    </>   
  )
};