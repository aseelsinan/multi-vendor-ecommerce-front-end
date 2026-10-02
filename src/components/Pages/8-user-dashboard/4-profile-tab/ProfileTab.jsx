import React from 'react';

const ProfileTab = ({ userData }) => {
  return (
    <div className="fade-in-content">
      <h3 className="text-white mb-4">Account Details</h3>
      
      <div className="glass-panel p-4 rounded-4 mb-5 border border-secondary border-opacity-25">
        <h5 className="text-white mb-4 border-bottom border-secondary border-opacity-25 pb-2">Personal Information</h5>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="text-secondary small mb-1">Full Name</label>
              <input type="text" className="form-control glass-input" defaultValue={userData.name} />
            </div>
            <div className="col-md-6">
              <label className="text-secondary small mb-1">Email Address</label>
              <input type="email" className="form-control glass-input" defaultValue={userData.email} />
            </div>
            <div className="col-md-6">
              <label className="text-secondary small mb-1">Phone Number</label>
              <input type="tel" className="form-control glass-input" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-info px-4 rounded-pill fw-semibold">Save Changes</button>
            </div>
          </div>
        </form>
      </div>

      <div className="glass-panel p-4 rounded-4 border border-secondary border-opacity-25">
        <h5 className="text-white mb-4 border-bottom border-secondary border-opacity-25 pb-2">Change Password</h5>
        <form>
          <div className="row g-3">
            <div className="col-12">
              <label className="text-secondary small mb-1">Current Password</label>
              <input type="password" className="form-control glass-input" placeholder="••••••••" />
            </div>
            <div className="col-md-6">
              <label className="text-secondary small mb-1">New Password</label>
              <input type="password" className="form-control glass-input" placeholder="••••••••" />
            </div>
            <div className="col-md-6">
              <label className="text-secondary small mb-1">Confirm New Password</label>
              <input type="password" className="form-control glass-input" placeholder="••••••••" />
            </div>
            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-outline-info px-4 rounded-pill fw-semibold">Update Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileTab;