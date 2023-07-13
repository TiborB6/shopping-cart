import React from 'react'
import PropTypes from 'prop-types'
import './product-display.scss'

export default function ProductDisplay ({ data }) {
  return (
    <div className="product">
      <div className="image-wrapper">
        <img src={data.img} alt="Camel Image" />
      </div>
      <h1>{data.name}</h1>
      <p>{data.priceEur}€</p>
    </div>
  )
}

ProductDisplay.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceEur: PropTypes.number.isRequired
  }).isRequired
}
