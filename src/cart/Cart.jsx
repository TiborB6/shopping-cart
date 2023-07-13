import React from 'react';
import Nav from '../nav/Nav';
import './cart.scss';

export default function Cart({ cart }) {
  return (
    <>
      <Nav />
      {cart.map((item, index) => (
        <div key={index} className="item-wrapper">
          <p>{item.item}</p>
          <p>
            {item.amount} x {item.price}
          </p>
          <p>{item.priceTotal}</p>
        </div>
      ))}
    </>
  );
}
