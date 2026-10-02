import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import { useCart } from '../../services/CartContext'; // تأكد أن المسار صحيح

const CartPage = () => {
  // استدعاء البيانات والدوال من الـ Context مباشرة في أعلى المكون
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // حساب الإجماليات
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = cartItems.length > 0 ? 15.00 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-wrapper py-5">
      <div className="container">
        
        {/* شريط التنقل */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/" className="text-info text-decoration-none">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-info text-decoration-none">Products</Link></li>
            <li className="breadcrumb-item active text-muted" aria-current="page">Shopping Cart</li>
          </ol>
        </nav>

        <h1 className="text-white fw-bold mb-4">
          Shopping Cart <span className="text-muted fs-4 fw-normal">({cartItems.length} Items)</span>
        </h1>

        {cartItems.length === 0 ? (
          /* حالة السلة الفارغة */
          <div className="empty-cart-state text-center py-5 glass-cart-card rounded-4">
            <div className="empty-cart-icon mb-4">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <h2 className="text-white mb-3">Your cart is empty</h2>
            <p className="text-muted mb-4">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn btn-info rounded-pill px-5 py-3 fw-bold">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="row g-5">
            {/* العمود الأيسر: قائمة المنتجات */}
            <div className="col-12 col-lg-8">
              <div className="glass-cart-card p-4 rounded-4">
                
                {/* رأس الجدول */}
                <div className="cart-header row d-none d-md-flex text-muted fw-semibold mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                  <div className="col-6">Product Details</div>
                  <div className="col-2 text-center">Quantity</div>
                  <div className="col-2 text-center">Price</div>
                  <div className="col-2 text-end">Total</div>
                </div>

                {/* عناصر السلة */}
                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item row align-items-center mb-4 pb-4 border-bottom border-secondary border-opacity-25">
                      
                      {/* بيانات المنتج والصورة */}
                      <div className="col-12 col-md-6 d-flex gap-3 mb-3 mb-md-0">
                        <div className="cart-item-img">
                          <img src={item.image} alt={item.title || item.name} />
                        </div>
                        <div className="cart-item-info d-flex flex-column justify-content-center">
                          <span className="text-info small fw-semibold mb-1">{item.category}</span>
                          <Link to={`/product/${item.slug}`} className="text-white text-decoration-none fw-bold mb-2 item-title">
                            {item.title || item.name}
                          </Link>
                          <button onClick={() => removeFromCart(item.id)} className="btn-remove text-danger small p-0 border-0 bg-transparent text-start w-auto">
                            <i className="fa-regular fa-trash-can me-1"></i> Remove
                          </button>
                        </div>
                      </div>

                      {/* التحكم بالكمية */}
                      <div className="col-5 col-md-2 d-flex justify-content-md-center">
                        <div className="qty-control-sm d-flex align-items-center">
                          <button onClick={() => updateQuantity(item.id, 'dec')}>-</button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQuantity(item.id, 'inc')}>+</button>
                        </div>
                      </div>

                      {/* سعر القطعة */}
                      <div className="col-3 col-md-2 text-center text-muted fw-semibold">
                        ${item.price} {/* أزلت toFixed هنا في حال كان السعر نصياً من البيانات التجريبية */}
                      </div>

                      {/* الإجمالي للقطعة */}
                      <div className="col-4 col-md-2 text-end text-white fw-bold fs-5">
                        ${(Number(item.price) * item.qty).toFixed(2)}
                      </div>
                      
                    </div>
                  ))}
                </div>
                
                {/* كود الخصم وأزرار التحديث */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-2 gap-3">
                  <div className="d-flex gap-2 w-100" style={{ maxWidth: '350px' }}>
                    <input type="text" className="form-control glass-input" placeholder="Coupon Code" />
                    <button className="btn btn-outline-info rounded-3 px-4">Apply</button>
                  </div>
                  <Link to="/products" className="btn btn-outline-light rounded-pill px-4">
                    Continue Shopping
                  </Link>
                </div>

              </div>
            </div>

            {/* العمود الأيمن: ملخص الطلب */}
            <div className="col-12 col-lg-4">
              <div className="glass-cart-card p-4 rounded-4 position-sticky" style={{ top: '100px' }}>
                <h4 className="text-white mb-4 border-bottom border-secondary border-opacity-25 pb-3">Order Summary</h4>
                
                <div className="summary-row d-flex justify-content-between mb-3 text-muted">
                  <span>Subtotal</span>
                  <span className="text-white fw-semibold">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-row d-flex justify-content-between mb-3 text-muted">
                  <span>Shipping Estimate</span>
                  <span className="text-white fw-semibold">${shipping.toFixed(2)}</span>
                </div>

                <div className="summary-row d-flex justify-content-between mb-4 text-muted">
                  <span>Tax Estimate</span>
                  <span className="text-white fw-semibold">$0.00</span>
                </div>

                <hr className="border-secondary opacity-25 mb-4" />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="fs-5 text-white fw-bold">Total</span>
                  <span className="fs-3 text-info fw-bold">${total.toFixed(2)}</span>
                </div>

                <Link to="/checkout" className="btn btn-info w-100 py-3 rounded-pill fw-bold fs-6 shadow-sm d-flex justify-content-center align-items-center gap-2">
                  Proceed to Checkout <i className="fa-solid fa-lock"></i>
                </Link>
                
                <div className="payment-methods mt-4 text-center">
                  <p className="text-muted small mb-2">We Accept</p>
                  <div className="d-flex justify-content-center gap-2 text-white-50 fs-4">
                    <i className="fa-brands fa-cc-visa"></i>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    <i className="fa-brands fa-cc-paypal"></i>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;