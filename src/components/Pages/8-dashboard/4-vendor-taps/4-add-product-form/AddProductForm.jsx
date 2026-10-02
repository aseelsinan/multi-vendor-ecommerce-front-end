import React, { useState } from 'react';

const AddProductForm = ({ onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    stock: '',
    category: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا سيتم إرسال البيانات للباك إند لاحقاً
    if (onSave) onSave(formData);
  };

  return (
    <div className="fade-in-content">
      <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom border-secondary border-opacity-25">
        <h4 className="text-white mb-0">Add New Product</h4>
        <button 
          type="button" 
          onClick={onCancel} 
          className="btn btn-sm btn-outline-light rounded-pill px-3"
        >
          <i className="fa-solid fa-arrow-left me-2"></i>Back to Products
        </button>
      </div>

      <div className="glass-panel p-4 p-md-5 rounded-4 border border-secondary border-opacity-25">
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            
            {/* عنوان المنتج */}
            <div className="col-12 col-md-8">
              <label className="text-secondary small mb-2">Product Title</label>
              <input 
                type="text" 
                name="title"
                className="form-control glass-input" 
                placeholder="e.g. Wireless Noise Canceling Headphones"
                value={formData.title}
                onChange={handleChange}
                required 
              />
            </div>

            {/* السعر */}
            <div className="col-12 col-md-4">
              <label className="text-secondary small mb-2">Price ($)</label>
              <input 
                type="number" 
                step="0.01"
                name="price"
                className="form-control glass-input" 
                placeholder="0.00"
                value={formData.price}
                onChange={handleChange}
                required 
              />
            </div>

            {/* التصنيف (سيتم جلبه من الباك إند لاحقاً) */}
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">Category</label>
              <select 
                name="category"
                className="form-select glass-input text-white" 
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" className="bg-dark">Select Category...</option>
                <option value="electronics" className="bg-dark">Electronics & Audio</option>
                <option value="computers" className="bg-dark">Computers & Accessories</option>
                <option value="gaming" className="bg-dark">Gaming</option>
              </select>
            </div>

            {/* كمية المخزون */}
            <div className="col-12 col-md-6">
              <label className="text-secondary small mb-2">Stock Quantity</label>
              <input 
                type="number" 
                name="stock"
                className="form-control glass-input" 
                placeholder="e.g. 50"
                value={formData.stock}
                onChange={handleChange}
                required 
              />
            </div>

            {/* رابط الصورة (مؤقتاً كنص حتى يتم ربط رفع الملفات) */}
            <div className="col-12">
              <label className="text-secondary small mb-2">Main Image URL</label>
              <input 
                type="url" 
                name="image"
                className="form-control glass-input" 
                placeholder="https://example.com/image.jpg"
                value={formData.image}
                onChange={handleChange}
                required 
              />
            </div>

            {/* وصف المنتج */}
            <div className="col-12">
              <label className="text-secondary small mb-2">Product Description</label>
              <textarea 
                name="description"
                className="form-control glass-input" 
                rows="4" 
                placeholder="Write a detailed description of your product..."
                value={formData.description}
                onChange={handleChange}
                required 
              ></textarea>
            </div>

            {/* أزرار الحفظ والإلغاء */}
            <div className="col-12 d-flex gap-3 mt-4 pt-2">
              <button type="submit" className="btn btn-info px-4 py-2 rounded-pill fw-semibold shadow-sm">
                <i className="fa-solid fa-floppy-disk me-2"></i>Save Product
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

export default AddProductForm;