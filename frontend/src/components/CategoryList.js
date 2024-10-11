import React from 'react';

const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-list">
      <h2>Select a Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
