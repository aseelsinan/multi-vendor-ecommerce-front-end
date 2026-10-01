import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dummyAllProducts } from '../../services/products';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { slug } = useParams();
  
  const product = dummyAllProducts.find((p) => p.slug === slug) || dummyAllProducts[0];

  // معرض صور إضافية تجريبية تحاكي استجابة الباك إند
  const productGallery = [
    product.image,
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80',
  ];

  const [activeImage, setActiveImage] = useState(productGallery[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    setActiveImage(product.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product.image]);

  const handleQuantity = (type) => {
    if (type === 'inc') setQuantity((prev) => prev + 1);
    if (type === 'dec' && quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="product-detail-wrapper py-5">
      <div className="container">
        
        {/* مسار التنقل (Breadcrumbs) */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/" className="text-info text-decoration-none">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-info text-decoration-none">Products</Link></li>
            <li className="breadcrumb-item"><Link to={`/category/${product.categorySlug}`} className="text-info text-decoration-none">{product.category}</Link></li>
            <li className="breadcrumb-item active text-muted" aria-current="page">{product.title}</li>
          </ol>
        </nav>

        {/* شبكة تفاصيل المنتج الرئيسية */}
        <div className="row g-5 mb-5">
          
          {/* معرض الصور (Image Gallery) */}
          <div className="col-12 col-lg-6">
            <div className="main-image-container mb-3">
              <img src={activeImage} alt={product.title} className="main-product-img" />
              <span className="vendor-glass-badge">
                <i className="fa-solid fa-store me-1"></i> {product.vendor}
              </span>
            </div>
            
            <div className="gallery-thumbs d-flex gap-3">
              {productGallery.map((imgUrl, index) => (
                <div 
                  key={index} 
                  className={`thumb-box ${activeImage === imgUrl ? 'active' : ''}`}
                  onClick={() => setActiveImage(imgUrl)}
                >
                  <img src={imgUrl} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* تفاصيل المنتج وخيارات الشراء */}
          <div className="col-12 col-lg-6 product-info-col">
            <div className="product-category-tag mb-2">{product.category}</div>
            <h1 className="product-title-detail mb-3">{product.title}</h1>
            
            {/* التقييم */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="rating-stars text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <span className="ms-2 text-white fw-bold">({product.rating})</span>
              </div>
              <span className="text-secondary">|</span>
              <span className="text-muted small">24 Customer Reviews</span>
            </div>

            {/* السعر وحالة المخزون */}
            <div className="price-box mb-4">
              <span className="currency">$</span>
              <span className="amount">{product.price}</span>
              <span className="badge bg-success-subtle text-success border border-success-subtle ms-3 px-3 py-2 rounded-pill">
                In Stock
              </span>
            </div>

            <p className="product-short-desc text-muted mb-4">
              Premium engineered audio device designed for unmatched acoustic clarity, deep bass response, and seamless everyday comfort.
            </p>

            <hr className="border-secondary opacity-25 my-4" />

            {/* محدد الكمية وأزرار الشراء */}
            <div className="purchase-controls d-flex flex-wrap gap-3 align-items-center mb-4">
              <div className="quantity-selector d-flex align-items-center">
                <button className="qty-btn" onClick={() => handleQuantity('dec')}>-</button>
                <span className="qty-value">{quantity}</span>
                <button className="qty-btn" onClick={() => handleQuantity('inc')}>+</button>
              </div>

              <button className="btn btn-info px-4 py-3 rounded-pill fw-bold d-flex align-items-center gap-2 flex-grow-1 justify-content-center">
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>

              <button className="btn-wishlist-action" title="Add to Wishlist">
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>

            {/* كرت البائع والضمان */}
            <div className="vendor-meta-card p-3 rounded-4 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="vendor-avatar">
                  <i className="fa-solid fa-shop"></i>
                </div>
                <div>
                  <h6 className="mb-0 text-white fw-bold">{product.vendor}</h6>
                  <span className="text-muted small">Verified Official Vendor</span>
                </div>
              </div>
              <Link to={`/vendor/${product.vendor.toLowerCase()}`} className="btn btn-sm btn-outline-info rounded-pill px-3">
                View Shop
              </Link>
            </div>

          </div>
        </div>

        {/* تبويبات المعلومات الإضافية والمراجعات */}
        <div className="product-tabs-wrapper p-4 rounded-4 mt-5">
          <ul className="nav nav-pills custom-glass-tabs mb-4 gap-2">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'specs' ? 'active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Customer Reviews
              </button>
            </li>
          </ul>

          <div className="tab-content text-muted">
            {activeTab === 'description' && (
              <div className="tab-pane fade show active">
                <h5 className="text-white mb-3">Product Overview</h5>
                <p>
                  Experience premium build craftsmanship tailored for high performance. Built with durable, lightweight materials and tuned for optimal efficiency. Perfect for everyday usage and demanding workloads.
                </p>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="tab-pane fade show active">
                <table className="table table-dark table-borderless glass-table">
                  <tbody>
                    <tr>
                      <th className="text-secondary w-25">Category</th>
                      <td className="text-white">{product.category}</td>
                    </tr>
                    <tr>
                      <th className="text-secondary">Vendor</th>
                      <td className="text-white">{product.vendor}</td>
                    </tr>
                    <tr>
                      <th className="text-secondary">Warranty</th>
                      <td className="text-white">12 Months Manufacturer Warranty</td>
                    </tr>
                    <tr>
                      <th className="text-secondary">Connectivity</th>
                      <td className="text-white">Wireless / Bluetooth 5.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-pane fade show active">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="text-white mb-0">Verified Buyer Feedback</h5>
                  <button className="btn btn-sm btn-outline-info rounded-pill px-3">Write Review</button>
                </div>
                <div className="review-item border-bottom border-secondary border-opacity-25 py-3">
                  <div className="d-flex justify-content-between mb-1">
                    <strong className="text-white">Ali Hasan</strong>
                    <span className="text-warning small"><i className="fa-solid fa-star"></i> 5.0</span>
                  </div>
                  <p className="mb-0 text-muted small">Outstanding product! Completely exceeded my expectations in everyday use.</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;