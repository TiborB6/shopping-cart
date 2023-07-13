import React from 'react';
import Nav from '../../../../nav/Nav';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { products } from '../../../../products_module/PRODUCTS_Module';
import './product-page.scss';
import CartButton from '../../../cart-button/CartButton';

export default function ProductPage({ addItemToCart }) {
  const { id } = useParams();
  const data = products[id];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create the item object
    const item = {
      item: data.name,
      amount: parseInt(e.target.elements.number.value, 10),
      price: data.priceEur,
      priceTotal: data.priceEur * parseInt(e.target.elements.number.value, 10),
    };
    // Call the addItemToCart function passed as a prop
    addItemToCart(item);
  };

  return (
    <>
      <Nav />
      <div className="main-content">
        <div className="left">
          <h1>{data.name}</h1>
          <p>{data.priceEur}€</p>
          <CartButton onSubmit={handleSubmit} />
        </div>
        <div className="right">
          <img src={data.img} alt="Camel Image" />
        </div>
      </div>
    </>
  );
}

ProductPage.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
};
