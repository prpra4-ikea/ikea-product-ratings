import React from 'react';

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rating: {product.rating}</p>
      <button onClick={() => onViewDetails(product)}>View Details</button>
    </div>
  );
};

export default ProductCard;
