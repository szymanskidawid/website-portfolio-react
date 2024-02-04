import React, { useState, useEffect } from 'react';
import ContextProviders from './contexts/ContextProviders';
import { fetchAllProducts } from './helpers/fetchAllProducts';
import { Router } from './helpers/Router';

import './styles/header-section/Header.css';
import './styles/header-section/Logo.css';
import './styles/buttons/CheckoutButton.css';
import './styles/buttons/RemoveButton.css';
import './styles/main-section/CategoriesDropDown.css';
import './styles/main-section/ProductGrid.css';
import './styles/main-section/ProductCard.css';
import './styles/basket-section/BasketGrid.css';
import './styles/basket-section/BasketProduct.css';
import './styles/buttons/MainButton.css';
import './styles/Footer.css';
import './styles/Variables.css';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function AppECommerce() {
  const [darkMode, setDarkMode] = useState(false);
  const [allProducts, setAllProducts] = useState(null);
  const [basket, setBasket] = useState({});

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('body-dark-theme');
    } else {
      document.body.classList.remove('body-dark-theme');
    }

    return () => {
      document.body.classList.remove('body-dark-theme');
    };
  }, [darkMode]);

  useEffect(() => {
    fetchAllProducts(setAllProducts);
  }, []);

  const totalPrice = () => {
    let price = 0;
    Object.keys(basket).forEach((_id) => {
      price += allProducts.find((item) => item._id === _id).price * basket[_id];
    });
    return price.toFixed(2);
  };

  return (
    <div className="AppECommerce">
      <ContextProviders {...{ darkMode, setDarkMode, basket, setBasket, allProducts, setAllProducts }}>
        <Router totalPrice={totalPrice} />
      </ContextProviders>
    </div>
  );
}

export default AppECommerce;
