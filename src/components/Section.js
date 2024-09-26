import React from 'react';
import ProductCard from './Productcard';
import './Section.css';

const Section = ({ title, products }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section__products">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
