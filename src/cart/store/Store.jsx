import React from 'react'
import Nav from '../../nav/Nav'
import { Link } from 'react-router-dom'
import ProductDisplay from './components/product-display/Product-Display'
import './store.scss'
import { products } from '../../products_module/PRODUCTS_Module'

export default function Store () {
  const productArr = Object.keys(products).map((key) => {
    return products[key]
  })

  return (
    <>
      <Nav />
      <div className="content">
      {productArr.map((item, index) => (
        <Link key={index} to={'/store/' + item.id}>
          <ProductDisplay data={item}/>
        </Link>
      ))}
      </div>
    </>
  )
}
