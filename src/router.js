import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RouteSwitch () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />}>
          <Route path=":product-name" element={<StoreDetails />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}