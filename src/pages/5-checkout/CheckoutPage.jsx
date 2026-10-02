import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  // حالة لاختيار طريقة الدفع
  const [paymentMethod, setPaymentMethod] = useState('card');

  // بيانات وهمية لعناصر السلة
  const cartItems = [
    { id: 1, name: 'Wireless Noise Canceling Headphones', price: 199.99, qty: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80' },
    { id: 2, name: 'Minimalist Mechanical Keyboard', price: 89.50, qty: 2, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&q=80' },
  ];

  // حساب الإجماليات
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 15.00;
  const total = subtotal + shipping;

  return (
    <div className="checkout-wrapper py-5">
      <div className="container">
        
        {/* شريط التنقل الفرعي */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/" className="text-info text-decoration-none">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/cart" className="text-info text-decoration-none">Cart</Link></li>
            <li className="breadcrumb-item active text-muted" aria-current="page">Checkout</li>
          </ol>
        </nav>

        <h1 className="text-white fw-bold mb-4">Secure Checkout</h1>

        <div className="row g-5">
          {/* العمود الأيسر: بيانات الشحن والدفع */}
          <div className="col-12 col-lg-8">
            <form className="checkout-form">
              
              {/* قسم بيانات الشحن */}
              <div className="glass-checkout-card p-4 rounded-4 mb-4">
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                  <i className="fa-solid fa-location-dot text-info"></i> Shipping Details
                </h4>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-secondary">First Name</label>
                    <input type="text" className="form-control glass-input" placeholder="John" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary">Last Name</label>
                    <input type="text" className="form-control glass-input" placeholder="Doe" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary">Email Address</label>
                    <input type="email" className="form-control glass-input" placeholder="john@example.com" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary">Phone Number</label>
                    <input type="tel" className="form-control glass-input" placeholder="+1 (555) 000-0000" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-secondary">Street Address</label>
                    <input type="text" className="form-control glass-input" placeholder="123 Main St, Apartment, Studio, or Floor" required />
                  </div>
                  <div className="col-md-5">
                    <label className="form-label text-secondary">Country</label>
                    <select className="form-select glass-input">
                      <option value="us">United States</option>
                      <option value="sa">Saudi Arabia</option>
                      <option value="ae">United Arab Emirates</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label text-secondary">City</label>
                    <input type="text" className="form-control glass-input" placeholder="New York" required />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label text-secondary">Zip Code</label>
                    <input type="text" className="form-control glass-input" placeholder="10001" required />
                  </div>
                </div>
              </div>

              {/* قسم طرق الدفع */}
              <div className="glass-checkout-card p-4 rounded-4 mb-4">
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                  <i className="fa-solid fa-credit-card text-info"></i> Payment Method
                </h4>

                <div className="payment-options">
                  <label className={`payment-option-card ${paymentMethod === 'card' ? 'active' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'card'} 
                        onChange={() => setPaymentMethod('card')} 
                      />
                      <span className="text-white fw-semibold">Credit / Debit Card</span>
                    </div>
                    <div className="payment-icons text-white-50 fs-5 gap-2 d-flex">
                      <i className="fa-brands fa-cc-visa"></i>
                      <i className="fa-brands fa-cc-mastercard"></i>
                    </div>
                  </label>

                  {/* حقول بطاقة الائتمان تظهر فقط إذا اختار الدفع بالبطاقة */}
                  {paymentMethod === 'card' && (
                    <div className="card-details-box p-3 mt-2 rounded-3 border border-secondary border-opacity-25 mb-3">
                      <div className="mb-3">
                        <input type="text" className="form-control glass-input" placeholder="Card Number" />
                      </div>
                      <div className="row g-2">
                        <div className="col-6">
                          <input type="text" className="form-control glass-input" placeholder="MM/YY" />
                        </div>
                        <div className="col-6">
                          <input type="text" className="form-control glass-input" placeholder="CVC" />
                        </div>
                      </div>
                    </div>
                  )}

                  <label className={`payment-option-card ${paymentMethod === 'paypal' ? 'active' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'paypal'} 
                        onChange={() => setPaymentMethod('paypal')} 
                      />
                      <span className="text-white fw-semibold">PayPal</span>
                    </div>
                    <i className="fa-brands fa-paypal text-info fs-5"></i>
                  </label>

                  <label className={`payment-option-card ${paymentMethod === 'cod' ? 'active' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'cod'} 
                        onChange={() => setPaymentMethod('cod')} 
                      />
                      <span className="text-white fw-semibold">Cash on Delivery</span>
                    </div>
                    <i className="fa-solid fa-money-bill-wave text-success fs-5"></i>
                  </label>
                </div>
              </div>

            </form>
          </div>

          {/* العمود الأيمن: ملخص الطلب */}
          <div className="col-12 col-lg-4">
            <div className="glass-checkout-card order-summary-card p-4 rounded-4 position-sticky" style={{ top: '100px' }}>
              <h4 className="text-white mb-4">Order Summary</h4>
              
              <div className="summary-items-list mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item d-flex gap-3 mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                    <div className="summary-img-box">
                      <img src={item.image} alt={item.name} />
                      <span className="item-qty-badge">{item.qty}</span>
                    </div>
                    <div className="summary-item-info flex-grow-1">
                      <h6 className="text-white mb-1 small">{item.name}</h6>
                      <span className="text-info fw-bold">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-calculations mb-4 text-muted">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span className="text-white">${shipping.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Taxes</span>
                  <span className="text-white">$0.00</span>
                </div>
                <hr className="border-secondary opacity-25" />
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-5 text-white fw-bold">Total</span>
                  <span className="fs-4 text-info fw-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="btn btn-info w-100 py-3 rounded-pill fw-bold fs-6 shadow-sm">
                Place Order <i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
              <div className="text-center mt-3 text-secondary small">
                <i className="fa-solid fa-lock me-1"></i> Secure and encrypted checkout
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;