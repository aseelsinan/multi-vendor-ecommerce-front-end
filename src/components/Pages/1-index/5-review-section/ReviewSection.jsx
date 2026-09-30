import React from 'react';
import './ReviewSection.css';

const ReviewSection = ({ title, subtitle, reviews }) => {
  // دالة صغيرة لرسم النجوم بناءً على الرقم
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fa-solid fa-star ${i <= rating ? 'star-filled' : 'star-empty'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <section className="reviews-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="section-title mb-2">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {/* Horizontal Scroll Snap Container */}
        <div className="reviews-carousel">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="customer-info">
                  <div className="customer-avatar">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div>
                    <h4 className="customer-name">{review.customer_name}</h4>
                    <span className="review-date">{review.created_at}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <div className="review-body">
                <p className="review-text">"{review.reviews}"</p>
              </div>

              <div className="review-footer">
                <span className="product-reviewed">
                  <i className="fa-solid fa-box-open me-2"></i>
                  {review.product_name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;