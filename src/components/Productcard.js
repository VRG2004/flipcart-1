import React from 'react';

function ProductList({ name, price, discount, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Discount: {discount}</p>
    </div>
  );
}

export default ProductList;

