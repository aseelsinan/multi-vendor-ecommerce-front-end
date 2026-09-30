import React from 'react';
import { Link } from 'react-router-dom';
import './VendorSection.css';

const VendorSection = ({ title, subtitle, vendors }) => {
  return (
    <section className="vendors-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4 pb-2 border-bottom border-secondary border-opacity-25">
          <div>
            <h2 className="section-title mb-1">{title}</h2>
            <p className="section-subtitle mb-0">{subtitle}</p>
          </div>
          <div>
            <Link to="/vendors" className="btn btn-outline-info px-4 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 view-all-btn">
              <span>View All Vendors</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Vendors Cards Grid */}
        <div className="row g-4">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="vendor-card">
                
                {/* Vendor Cover Image (خلفية كفر البائع) */}
                <div className="vendor-cover"></div>
                
                {/* Vendor Profile Image */}
                <div className="vendor-avatar-wrapper">
                  <img src={vendor.image} alt={vendor.name} className="vendor-avatar" />
                  {/* شارة توثيق */}
                  {vendor.isVerified && (
                    <span className="verified-badge" title="Verified Vendor">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                  )}
                </div>

                <div className="vendor-card-body text-center">
                  <Link to={`/vendor/${vendor.slug}`} className="text-decoration-none">
                    <h3 className="vendor-name">{vendor.name}</h3>
                  </Link>
                  
                  <div className="vendor-rating mb-3">
                    <i className="fa-solid fa-star"></i> {vendor.rating} 
                    <span className="text-muted ms-1">({vendor.reviews} Reviews)</span>
                  </div>

                  {/* Categories Badges (تصنيفات البائع) */}
                  <div className="vendor-categories">
                    {vendor.categories.map((cat, index) => (
                      <span key={index} className="category-pill">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="vendor-card-footer">
                  <Link to={`/vendor/${vendor.slug}`} className="btn-visit-store w-100">
                    Visit Store <i className="fa-solid fa-store ms-2"></i>
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorSection;