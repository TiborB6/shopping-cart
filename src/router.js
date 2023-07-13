import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Store from './cart/store/Store';
import ProductPage from './cart/store/components/product-page/ProductPage';
import Cart from './cart/Cart.jsx';

export default function RouteSwitch() {
  const [cart, setCart] = React.useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route
          path="/store/:id"
          element={<ProductPage addItemToCart={addItemToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}
