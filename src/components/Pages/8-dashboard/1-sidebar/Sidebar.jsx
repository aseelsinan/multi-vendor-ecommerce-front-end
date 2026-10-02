import React from 'react';

const Sidebar = ({ userData, activeTab, setActiveTab, handleLogout }) => {
  const isVendor = userData.role === 'vendor';

  return (
    <div className="glass-panel p-4 rounded-4 position-sticky" style={{ top: '100px' }}>
      <div className="text-center mb-4 pb-4 border-bottom border-secondary border-opacity-25">
        <div className="user-avatar mb-3 mx-auto">
          <i className="fa-regular fa-user fs-1 text-info"></i>
        </div>
        <h5 className="text-white fw-bold mb-1">{userData.name}</h5>
        <p className="text-muted small mb-2">{userData.email}</p>
        {isVendor ? (
          <span className="badge bg-success bg-opacity-25 text-success border border-success rounded-pill px-3">
            <i className="fa-solid fa-shop me-1"></i> Verified Vendor
          </span>
        ) : (
          <span className="badge bg-info bg-opacity-25 text-info border border-info rounded-pill px-3">
            Customer
          </span>
        )}
      </div>

      <div className="dashboard-nav d-flex flex-column gap-2">
        {/* === أزرار البائع === */}
        {isVendor && (
          <>
            <button className={`dash-nav-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
              <i className="fa-solid fa-chart-pie"></i> Store Analytics
            </button>
            <button className={`dash-nav-btn ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>
              <i className="fa-solid fa-box-open"></i> My Products
            </button>
            <button className={`dash-nav-btn ${activeTab === 'vendor-orders' ? 'active' : ''}`} onClick={() => setActiveTab('vendor-orders')}>
              <i className="fa-solid fa-clipboard-list"></i> Store Orders
            </button>
          </>
        )}

        {/* === أزرار العميل === */}
        {!isVendor && (
          <>
            <button className={`dash-nav-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
              <i className="fa-solid fa-table-columns"></i> Dashboard
            </button>
            <button className={`dash-nav-btn ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
              <i className="fa-solid fa-box"></i> My Orders
            </button>
            <button className={`dash-nav-btn ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => setActiveTab('wishlist')}>
              <i className="fa-regular fa-heart"></i> Wishlist
            </button>
            <button className={`dash-nav-btn ${activeTab === 'addresses' ? 'active' : ''}`} onClick={() => setActiveTab('addresses')}>
              <i className="fa-solid fa-location-dot"></i> Addresses
            </button>
          </>
        )}

        {/* === أزرار مشتركة للجميع === */}
        <button className={`dash-nav-btn ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
          <i className="fa-regular fa-id-badge"></i> Account Settings
        </button>
        
        {/* زر الترقية لبائع (يظهر للعميل فقط) */}
        {!isVendor && (
          <>
            <hr className="border-secondary opacity-25 my-2" />
            <button className={`dash-nav-btn text-warning ${activeTab === 'become-vendor' ? 'active' : ''}`} onClick={() => setActiveTab('become-vendor')}>
              <i className="fa-solid fa-store"></i> Become a Vendor
            </button>
          </>
        )}
        
        <hr className="border-secondary opacity-25 my-2" />
        <button className="dash-nav-btn text-danger logout-btn" onClick={handleLogout}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;