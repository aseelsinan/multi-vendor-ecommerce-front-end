import React, { useRef } from 'react';
import './ReviewSection.css';

const ReviewSection = ({ title, subtitle, reviews }) => {
  const carouselRef = useRef(null);

  // دالة تحريك الكاروسيل يميناً ويساراً
  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 380; // مقدار الإزاحة بالبكسل (عرض البطاقة + الفراغ)
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
        {/* Section Header with Navigation Controls */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-end gap-3 mb-4">
          <div>
            <h2 className="section-title mb-1">{title}</h2>
            <p className="section-subtitle mb-0">{subtitle}</p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="carousel-nav-buttons d-flex gap-2">
            <button 
              className="carousel-nav-btn" 
              onClick={() => handleScroll('prev')}
              title="Previous Reviews"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button 
              className="carousel-nav-btn" 
              onClick={() => handleScroll('next')}
              title="Next Reviews"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Snap Container */}
        <div className="reviews-carousel" ref={carouselRef}>
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