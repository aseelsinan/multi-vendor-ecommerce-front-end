import React from 'react';

const VendorOverview = ({ userData }) => {
  return (
    <div className="fade-in-content">
      <h3 className="text-white mb-4">Store Analytics Overview</h3>
      
      <div className="row g-4 mb-5">
        <div className="col-12 col-md-4">
          <div className="glass-panel p-4 rounded-4 border-start border-4 border-info h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-muted mb-0">Total Earnings</h6>
              <div className="bg-info bg-opacity-10 text-info p-2 rounded-circle">
                <i className="fa-solid fa-dollar-sign"></i>
              </div>
            </div>
            <h2 className="text-white fw-bold">$4,850.00</h2>
            <small className="text-success"><i className="fa-solid fa-arrow-trend-up me-1"></i> +12% this month</small>
          </div>
        </div>
        
        <div className="col-12 col-md-4">
          <div className="glass-panel p-4 rounded-4 border-start border-4 border-warning h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-muted mb-0">Pending Orders</h6>
              <div className="bg-warning bg-opacity-10 text-warning p-2 rounded-circle">
                <i className="fa-solid fa-box-open"></i>
              </div>
            </div>
            <h2 className="text-white fw-bold">8</h2>
            <small className="text-muted">Requires processing</small>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="glass-panel p-4 rounded-4 border-start border-4 border-success h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-muted mb-0">Active Products</h6>
              <div className="bg-success bg-opacity-10 text-success p-2 rounded-circle">
                <i className="fa-solid fa-tags"></i>
              </div>
            </div>
            <h2 className="text-white fw-bold">24</h2>
            <small className="text-muted">In your catalog</small>
          </div>
        </div>
      </div>

      <div className="glass-panel p-4 rounded-4">
        <h4 className="text-white mb-4">Recent Store Activity</h4>
        <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-secondary border-opacity-25">
          <div className="bg-success bg-opacity-10 text-success p-3 rounded-circle">
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <h6 className="text-white mb-1">Order #ORD-9932 Delivered</h6>
            <span className="text-muted small">Customer confirmed receipt. $120.00 added to balance.</span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="bg-info bg-opacity-10 text-info p-3 rounded-circle">
            <i className="fa-solid fa-star"></i>
          </div>
          <div>
            <h6 className="text-white mb-1">New 5-Star Review</h6>
            <span className="text-muted small">Ali Hasan reviewed "Wireless Headphones".</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorOverview;