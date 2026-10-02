import React, { useState } from 'react';
import AddAddressForm from './AddAddressForm';

const AddressesTab = ({ userData }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  // قائمة العناوين التجريبية
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      fullName: userData?.name || "Aseel Alsalahi",
      phone: "+967 770 000 000",
      country: "Yemen",
      city: "Taiz",
      streetAddress: "Al-Dahi St, Next to Technical Institute",
      isDefault: true
    }
  ]);

  const handleSaveAddress = (newAddressData) => {
    const newEntry = {
      id: Date.now(),
      ...newAddressData
    };

    if (newEntry.isDefault) {
      // إزالة الافتراضي من بقية العناوين إذا كان الجديد افتراضياً
      setAddresses(prev => prev.map(a => ({ ...a, isDefault: false })).concat(newEntry));
    } else {
      setAddresses(prev => [...prev, newEntry]);
    }

    setShowAddForm(false);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(prev => prev.filter(item => item.id !== id));
  };

  // إذا تم اختيار إضافة عنوان، نعرض الفورم
  if (showAddForm) {
    return (
      <AddAddressForm 
        onCancel={() => setShowAddForm(false)} 
        onSaveAddress={handleSaveAddress} 
      />
    );
  }

  return (
    <div className="fade-in-content">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-white mb-0">Shipping Addresses</h3>
        <button 
          onClick={() => setShowAddForm(true)} 
          className="btn btn-info rounded-pill px-4 fw-semibold"
        >
          <i className="fa-solid fa-plus me-2"></i>Add New
        </button>
      </div>

      <div className="row g-4">
        {addresses.map((address) => (
          <div key={address.id} className="col-12 col-md-6">
            <div className={`glass-panel p-4 rounded-4 h-100 position-relative ${address.isDefault ? 'border border-info border-opacity-50' : 'border border-secondary border-opacity-25'}`}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                {address.isDefault ? (
                  <span className="badge bg-info text-dark">Default</span>
                ) : (
                  <span></span>
                )}
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-light rounded-circle px-2" title="Edit">
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button 
                    onClick={() => handleDeleteAddress(address.id)} 
                    className="btn btn-sm btn-outline-danger rounded-circle px-2" 
                    title="Delete"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </div>
              <h5 className="text-white mb-2">{address.fullName}</h5>
              <p className="text-muted mb-1 small">{address.streetAddress}</p>
              <p className="text-muted mb-1 small">{address.city}, {address.country}</p>
              <p className="text-muted mb-0 small mt-3 pt-3 border-top border-secondary border-opacity-25">
                <i className="fa-solid fa-phone me-2 text-info"></i>{address.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressesTab;