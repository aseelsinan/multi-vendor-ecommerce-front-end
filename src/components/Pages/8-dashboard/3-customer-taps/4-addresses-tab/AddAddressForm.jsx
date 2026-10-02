import React, { useState } from 'react';

const AddAddressForm = ({ onCancel, onSaveAddress }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'Yemen',
    isDefault: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSaveAddress) {
      onSaveAddress(formData);
    }
  };

  return (
    <div className="fade-in-content">
      <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom border-secondary border-opacity-25">
        <h4 className="text-white mb-0">Add New Shipping Address</h4>
        <button 
          type="button" 
          onClick={onCancel} 
          className="btn btn-sm btn-outline-light rounded-pill px-3"
        >
          <i className="fa-solid fa-arrow-left me-2"></i>Back to Addresses
        </button>
      </div>

      <div className="glass-panel p-4 p-md-5 rounded-4 border border-secondary border-opacity-25">
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            
            {/* Full Name */}
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">Recipient Full Name</label>
              <input 
                type="text" 
                name="fullName"
                className="form-control glass-input" 
                placeholder="e.g. Aseel Alsalahi"
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Phone Number */}
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">Phone / Mobile Number</label>
              <input 
                type="tel" 
                name="phone"
                className="form-control glass-input" 
                placeholder="+967 770 000 000"
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Country */}
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">Country</label>
              <select 
                name="country"
                className="form-select glass-input text-white" 
                value={formData.country}
                onChange={handleChange}
              >
                <option value="Yemen" className="bg-dark">Yemen</option>
                <option value="Saudi Arabia" className="bg-dark">Saudi Arabia</option>
                <option value="United Arab Emirates" className="bg-dark">United Arab Emirates</option>
                <option value="Egypt" className="bg-dark">Egypt</option>
              </select>
            </div>

            {/* City */}
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">City</label>
              <input 
                type="text" 
                name="city"
                className="form-control glass-input" 
                placeholder="e.g. Taiz"
                value={formData.city}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Street Address */}
            <div className="col-12">
              <label className="text-secondary small mb-2">Street Address & Landmark</label>
              <input 
                type="text" 
                name="streetAddress"
                className="form-control glass-input" 
                placeholder="Street name, Building number, Apartment, Nearby landmark"
                value={formData.streetAddress}
                onChange={handleChange}
                required 
              />
            </div>

            {/* State / Province */}
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">State / Province</label>
              <input 
                type="text" 
                name="state"
                className="form-control glass-input" 
                placeholder="e.g. Taiz Governorate"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            {/* Postal Code */}
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">Postal / Zip Code</label>
              <input 
                type="text" 
                name="postalCode"
                className="form-control glass-input" 
                placeholder="e.g. 12345"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>

            {/* Default Address Checkbox */}
            <div className="col-12">
              <div className="form-check custom-checkbox">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="isDefault" 
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                />
                <label className="form-check-label text-muted small ms-2" htmlFor="isDefault">
                  Set as default shipping address for future orders
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="col-12 d-flex gap-3 mt-4 pt-2">
              <button type="submit" className="btn btn-info px-4 py-2 rounded-pill fw-semibold shadow-sm">
                <i className="fa-solid fa-floppy-disk me-2"></i>Save Address
              </button>
              <button 
                type="button" 
                onClick={onCancel} 
                className="btn btn-outline-secondary px-4 py-2 rounded-pill"
              >
                Cancel
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddressForm;