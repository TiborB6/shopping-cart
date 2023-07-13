import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Store from './cart/store/Store'
import ProductPage from './cart/store/components/product-page/ProductPage'
import Cart from './cart/Cart.jsx'

export default function RouteSwitch () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<ProductPage/>} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  )
}
