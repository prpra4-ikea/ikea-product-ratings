import React, { useState } from 'react';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { products } from './data/products';
import './App.css';

const App = () => {
  const categories = Object.keys(products);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null); // Reset product details view when category changes
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleGoBack = () => {
    setSelectedProduct(null); // Go back to product list
  };

  return (
    <div className="App">
      <Header />
      <CategoryList categories={categories} onSelectCategory={handleCategoryChange} />

      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onGoBack={handleGoBack} />
      ) : (
        <ProductList products={products[selectedCategory]} onViewDetails={handleViewDetails} />
      )}
    </div>
  );
};

export default App;
