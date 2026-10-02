import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../../services/WishlistContext';
import './DashboardPage.css';

// مكونات مشتركة
import Sidebar from '../../components/Pages/8-dashboard/1-sidebar/Sidebar';
import ProfileTab from '../../components/Pages/8-dashboard/2-shared-taps/1-profile-tab/ProfileTab';

// مكونات العميل
import OverviewTab from '../../components/Pages/8-dashboard/3-customer-taps/1-overview-tab/OverviewTab';
import OrdersTab from '../../components/Pages/8-dashboard/3-customer-taps/2-orderstab/OrdersTab';
import WishlistTab from '../../components/Pages/8-dashboard/3-customer-taps/3-wishlist-tab/WishlistTab';
import AddressesTab from '../../components/Pages/8-dashboard/3-customer-taps/4-addresses-tab/AddressesTab';
import BecomeVendorTab from '../../components/Pages/8-dashboard/3-customer-taps/5-become-vendor/BecomeVendorTab';

// مكونات البائع
import VendorOverview from '../../components/Pages/8-dashboard/4-vendor-taps/1-vendor-overview/VendorOverview';
import VendorProducts from '../../components/Pages/8-dashboard/4-vendor-taps/2-vendor-products/VendorProducts';
import VendorOrders from '../../components/Pages/8-dashboard/4-vendor-taps/3-vendor-orders/VendorOrders';
const DashboardPage = () => {
  // محاكاة لدور المستخدم (للتطوير: سنضع زر لتغييرها لاحقاً ستأتي من الباك إند)
  const [userRole, setUserRole] = useState('customer'); // 'customer' or 'vendor'
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const { wishlistItems } = useWishlist();

  const userData = {
    name: "Aseel Alsalahi",
    email: "aseel@example.com",
    role: userRole,
    totalOrders: 12,
    wishlistCount: wishlistItems.length
  };

  const handleLogout = () => {
    alert("Logging out...");
    navigate('/login');
  };

  // دالة عرض المحتوى بناءً على التبويب والدور
  const renderContent = () => {
    // 1. التبويبات المشتركة
    if (activeTab === 'profile') return <ProfileTab userData={userData} />;

    // 2. تبويبات البائع (Vendor)
    if (userRole === 'vendor') {
      switch (activeTab) {
        case 'overview': return <VendorOverview userData={userData} />;
        case 'products': return <VendorProducts />;
        case 'vendor-orders': return <VendorOrders />;
        default: return <VendorOverview userData={userData} />;
      }
    }

    // 3. تبويبات العميل (Customer)
    switch (activeTab) {
      case 'overview': return <OverviewTab userData={userData} />;
      case 'orders': return <OrdersTab />;
      case 'wishlist': return <WishlistTab />;
      case 'addresses': return <AddressesTab userData={userData} />;
      case 'become-vendor': return <BecomeVendorTab />;
      default: return <OverviewTab userData={userData} />;
    }
  };

  return (
    <div className="dashboard-wrapper py-5 position-relative">
      
      {/* زر للتجربة فقط: يتيح لك التبديل بين واجهة العميل والبائع */}
      <div className="position-absolute top-0 end-0 m-3 z-3">
        <button 
          className="btn btn-sm btn-warning rounded-pill px-3 shadow"
          onClick={() => {
            setUserRole(prev => prev === 'customer' ? 'vendor' : 'customer');
            setActiveTab('overview');
          }}
        >
          <i className="fa-solid fa-arrows-rotate me-2"></i>
          Test Mode: You are a {userRole.toUpperCase()}
        </button>
      </div>

      <div className="container mt-4">
        <div className="row g-4 g-lg-5">
          <div className="col-12 col-lg-3">
            <Sidebar 
              userData={userData} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              handleLogout={handleLogout} 
            />
          </div>
          <div className="col-12 col-lg-9">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;