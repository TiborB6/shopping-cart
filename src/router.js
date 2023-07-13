import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Store from './store/Store'

export default function RouteSwitch () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />}>
          <Route path=":product-name" />
        </Route>
        <Route path="/cart" />
      </Routes>
    </BrowserRouter>
  )
}
