import React, { useState } from 'react';

const BecomeVendorTab = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="fade-in-content text-center py-5">
        <div className="glass-panel p-5 rounded-4 border border-success border-opacity-50 mx-auto" style={{ maxWidth: '600px' }}>
          <i className="fa-solid fa-circle-check display-1 text-success mb-4"></i>
          <h3 className="text-white mb-3">Application Submitted Successfully!</h3>
          <p className="text-muted mb-4">
            Thank you for your interest in selling with us. Our administration team is reviewing your shop details. We will notify you via email once your account is approved.
          </p>
          <button className="btn btn-outline-info rounded-pill px-4" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in-content">
      <div className="mb-4">
        <h3 className="text-white mb-2">Become a Vendor</h3>
        <p className="text-muted">Start selling your products to thousands of customers today.</p>
      </div>
      
      <div className="glass-panel p-4 p-md-5 rounded-4 border border-info border-opacity-25">
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">Shop Name</label>
              <input type="text" className="form-control glass-input" placeholder="e.g. Aseel Tech Store" required />
            </div>
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">Business Phone Number</label>
              <input type="tel" className="form-control glass-input" placeholder="+967 770 000 000" required />
            </div>
            <div className="col-12">
              <label className="text-secondary small mb-2">What kind of products do you sell?</label>
              <select className="form-select glass-input text-white" required>
                <option value="" className="bg-dark">Select a primary category...</option>
                <option value="electronics" className="bg-dark">Electronics & Gadgets</option>
                <option value="fashion" className="bg-dark">Fashion & Clothing</option>
                <option value="home" className="bg-dark">Home & Furniture</option>
                <option value="other" className="bg-dark">Other</option>
              </select>
            </div>
            <div className="col-12">
              <label className="text-secondary small mb-2">Brief Shop Description</label>
              <textarea className="form-control glass-input" rows="4" placeholder="Tell us a bit about your business and products..." required></textarea>
            </div>
            <div className="col-12 mt-4 pt-2 border-top border-secondary border-opacity-25">
              <button type="submit" className="btn btn-info px-5 py-3 rounded-pill fw-bold shadow-sm w-100">
                <i className="fa-solid fa-paper-plane me-2"></i> Submit Application
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeVendorTab;