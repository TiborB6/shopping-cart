import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Store from './store/Store'
import ProductPage from './store/components/product-page/ProductPage'

export default function RouteSwitch () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<ProductPage data={{}}/>} />
        <Route path="/cart" />
      </Routes>
    </BrowserRouter>
  )
}
