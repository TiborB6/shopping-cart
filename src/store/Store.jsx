import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'
import ProductDisplay from './components/product-display/Product-Display'
import './store.scss'
import { products } from '../products_module/PRODUCTS_Module'

export default function Store () {
  return (
    <>
      <Nav />
      <div className="content">
        {products.map((item, index) => (
          <Link key={index} to={item.page}>
            <ProductDisplay data={item} />
          </Link>
        ))}
      </div>
    </>
  )
}
