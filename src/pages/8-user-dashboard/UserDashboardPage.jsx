import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../components/Pages/8-user-dashboard/1-sidebar/Sidebar';
import OverviewTab from '../../components/Pages/8-user-dashboard/2-overview-tab/OverviewTab';
import OrdersTab from '../../components/Pages/8-user-dashboard/3-orderstab/OrdersTab';
import ProfileTab from '../../components/Pages/8-user-dashboard/4-profile-tab/ProfileTab';
import AddressesTab from '../../components/Pages/8-user-dashboard/6-addresses-tab/AddressesTab';
import WishlistTab from '../../components/Pages/8-user-dashboard/5-wishlist-tab/WishlistTab';

// استيراد الـ Context لقراءة العدد الفعلي للمفضلة
import { useWishlist } from '../../services/WishlistContext';

import './UserDashboardPage.css';

const UserDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  // جلب قائمة المفضلة الحقيقية
  const { wishlistItems } = useWishlist();

  const userData = {
    name: "Aseel Alsalahi",
    email: "aseel@example.com",
    totalOrders: 12,
    wishlistCount: wishlistItems.length // عدد المنتجات الفعلي من الـ Context
  };

  const handleLogout = () => {
    alert("Logging out...");
    navigate('/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab userData={userData} />;
      case 'orders': return <OrdersTab />;
      case 'profile': return <ProfileTab userData={userData} />;
      case 'wishlist': return <WishlistTab />;
      case 'addresses': return <AddressesTab userData={userData} />;
      default: return null;
    }
  };

  return (
    <div className="dashboard-wrapper py-5">
      <div className="container">
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

export default UserDashboardPage;