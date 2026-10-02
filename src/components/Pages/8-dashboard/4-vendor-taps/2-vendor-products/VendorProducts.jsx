import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProductForm from '../4-add-product-form/AddProductForm'; // استيراد فورم الإضافة

const VendorProducts = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  // بيانات وهمية لمنتجات التاجر (أضفنا slug ليعمل رابط العرض)
  const [products, setProducts] = useState([
    { id: 1, title: 'Wireless Noise Canceling Headphones', slug: 'wireless-headphones', price: 199.99, stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80' },
    { id: 2, title: 'Minimalist Mechanical Keyboard', slug: 'mechanical-keyboard', price: 89.50, stock: 5, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&q=80' },
    { id: 3, title: 'Ergonomic Gaming Mouse', slug: 'gaming-mouse', price: 59.99, stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1527814050087-37938154796c?w=100&q=80' }
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active': return <span className="badge bg-success bg-opacity-25 text-success border border-success rounded-pill">Active</span>;
      case 'Low Stock': return <span className="badge bg-warning bg-opacity-25 text-warning border border-warning rounded-pill">Low Stock</span>;
      case 'Out of Stock': return <span className="badge bg-danger bg-opacity-25 text-danger border border-danger rounded-pill">Out of Stock</span>;
      default: return <span className="badge bg-secondary">Unknown</span>;
    }
  };

  const handleSaveProduct = (newProductData) => {
    // تحديد حالة المخزون بناءً على الكمية المدخلة
    let productStatus = 'Active';
    if (newProductData.stock == 0) productStatus = 'Out of Stock';
    else if (newProductData.stock < 10) productStatus = 'Low Stock';

    const newEntry = {
      id: Date.now(),
      title: newProductData.title,
      slug: newProductData.title.toLowerCase().replace(/ /g, '-'),
      price: parseFloat(newProductData.price),
      stock: parseInt(newProductData.stock),
      status: productStatus,
      image: newProductData.image
    };

    setProducts(prev => [newEntry, ...prev]);
    setShowAddForm(false); // إغلاق الفورم بعد الحفظ
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this product?")) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  // تبديل العرض بين جدول المنتجات ونموذج الإضافة
  if (showAddForm) {
    return <AddProductForm onCancel={() => setShowAddForm(false)} onSave={handleSaveProduct} />;
  }

  return (
    <div className="fade-in-content">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="text-white mb-1">My Products</h3>
          <p className="text-muted small mb-0">Manage your store inventory and listings.</p>
        </div>
        <button 
          className="btn btn-info rounded-pill px-4 fw-semibold shadow-sm"
          onClick={() => setShowAddForm(true)}
        >
          <i className="fa-solid fa-plus me-2"></i>Add Product
        </button>
      </div>

      <div className="glass-panel rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-dark table-hover table-borderless glass-table mb-0 align-middle">
            <thead className="border-bottom border-secondary border-opacity-25">
              <tr>
                <th className="py-3 px-4">Product</th>
                <th className="py-3">Price</th>
                <th className="py-3">Stock</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-end px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-bottom border-secondary border-opacity-10">
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center gap-3">
                      <img src={product.image} alt={product.title} className="rounded-3 object-fit-cover" style={{ width: '50px', height: '50px' }} />
                      <span className="text-white fw-medium d-inline-block text-truncate" style={{ maxWidth: '200px' }} title={product.title}>
                        {product.title}
                      </span>
                    </div>
                  </td>
                  <td className="text-info fw-bold">${product.price.toFixed(2)}</td>
                  <td className="text-white">{product.stock}</td>
                  <td>{getStatusBadge(product.status)}</td>
                  <td className="text-end px-4">
                    <div className="d-flex gap-2 justify-content-end">
                      {/* زر عرض المنتج للمعاينة */}
                      <Link to={`/product/${product.slug}`} className="btn btn-sm btn-outline-info rounded-circle px-2" title="View in Store">
                        <i className="fa-regular fa-eye"></i>
                      </Link>
                      <button className="btn btn-sm btn-outline-light rounded-circle px-2" title="Edit Product">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger rounded-circle px-2" title="Delete Product" onClick={() => handleDelete(product.id)}>
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-5 text-muted">
                    No products added yet. Click "Add Product" to start selling.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorProducts;