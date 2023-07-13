import React from 'react'
import Nav from '../../../nav/Nav'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { products } from '../../../products_module/PRODUCTS_Module'
import './product-page.scss'

export default function ProductPage () {
  const { id } = useParams()

  const data = products[id]

  return (
    <>
      <Nav />
      <div className="main-content">
        <div className="left">
          <h1>
            {data.name}
          </h1>
          <p>
            {data.priceEur}€
          </p>
          {/* CartAdd */}
        </div>
        <div className="right">
          <img src={data.img} alt="Camel Image" />
        </div>
      </div>
    </>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceEur: PropTypes.number.isRequired
  }).isRequired
}
