import React from 'react';

const OverviewTab = ({ userData }) => {
  return (
    <div className="fade-in-content">
      <h3 className="text-white mb-4">Main Dashboard</h3>
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="stat-card glass-panel p-4 rounded-4 d-flex align-items-center gap-4">
            <div className="stat-icon bg-info bg-opacity-10 text-info">
              <i className="fa-solid fa-box-open fs-2"></i>
            </div>
            <div>
              <h2 className="text-white mb-1 fw-bold">{userData.totalOrders}</h2>
              <span className="text-muted">Total Orders</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="stat-card glass-panel p-4 rounded-4 d-flex align-items-center gap-4">
            <div className="stat-icon bg-danger bg-opacity-10 text-danger">
              <i className="fa-regular fa-heart fs-2"></i>
            </div>
            <div>
              <h2 className="text-white mb-1 fw-bold">{userData.wishlistCount}</h2>
              <span className="text-muted">Wishlist Items</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 glass-panel p-4 rounded-4">
        <h4 className="text-white mb-3">Recent Activity</h4>
        <p className="text-muted">Your recent account activity and updates will appear here.</p>
      </div>
    </div>
  );
};

export default OverviewTab;