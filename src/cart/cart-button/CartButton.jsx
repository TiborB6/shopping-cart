import React from 'react';

export default function CartButton({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="number" min="0" name="number" />
      <button type="submit">Add to Cart</button>
    </form>
  );
}
