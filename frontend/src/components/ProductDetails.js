import React, { useState } from 'react';

const ProductDetails = ({ product, onGoBack }) => {
  const [rating, setRating] = useState(product.rating);
  const [reviews, setReviews] = useState(product.reviews);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);

  const handleReviewSubmit = () => {
    if (newReview.trim() && newRating > 0) {
      const updatedReviews = [...reviews, { text: newReview, rating: newRating }];
      setReviews(updatedReviews);

      // Update overall rating (average)
      const totalRating = updatedReviews.reduce((sum, review) => sum + review.rating, 0);
      setRating((totalRating / updatedReviews.length).toFixed(1));

      // Clear inputs after submission
      setNewReview('');
      setNewRating(0);
    }
  };

  return (
    <div className="product-details">
      <button onClick={onGoBack}>Go Back</button>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Average Rating: {rating}</p>

      <div className="add-review">
        <h3>Add a Review</h3>
        <input
          type="number"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          value={newRating}
          onChange={(e) => setNewRating(parseInt(e.target.value))}
        />
        <textarea
          placeholder="Leave a review"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleReviewSubmit}>Submit</button>
      </div>

      <h3>Reviews</h3>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <li key={index}>
              <strong>Rating: {review.rating}</strong> - {review.text}
            </li>
          ))
        ) : (
          <li>No reviews yet.</li>
        )}
      </ul>
    </div>
  );
};

export default ProductDetails;
