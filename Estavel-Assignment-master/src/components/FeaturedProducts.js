import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Granite', image: '/assets/images/granite.jpg' },
    { id: 2, name: 'Marble', image: '/assets/images/marble.jpg' },
    { id: 3, name: 'Slate', image: '/assets/images/slate.jpg' },
  ];

  return (
    <section id="products" className="featured-products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
