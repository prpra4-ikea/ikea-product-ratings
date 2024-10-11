import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onViewDetails }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
