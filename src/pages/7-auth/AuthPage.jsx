import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isLogin, setIsLogin] = useState(location.pathname !== '/register');

  useEffect(() => {
    setIsLogin(location.pathname !== '/register');
  }, [location.pathname]);

  const toggleAuthMode = (mode) => {
    setIsLogin(mode === 'login');
    navigate(mode === 'login' ? '/login' : '/register', { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? 'Logging in...' : 'Registering...');
  };

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            
            {/* البطاقة الزجاجية */}
            <div className="glass-auth-card p-4 p-sm-5 rounded-4">
              
              {/* أزرار التبديل */}
              <div className="auth-tabs d-flex position-relative mb-4 rounded-pill p-1">
                <div 
                  className={`tab-highlighter position-absolute rounded-pill ${isLogin ? 'left' : 'right'}`} 
                ></div>
                <button 
                  className={`auth-tab-btn flex-fill rounded-pill position-relative z-1 ${isLogin ? 'active' : ''}`}
                  onClick={() => toggleAuthMode('login')}
                  type="button"
                >
                  Login
                </button>
                <button 
                  className={`auth-tab-btn flex-fill rounded-pill position-relative z-1 ${!isLogin ? 'active' : ''}`}
                  onClick={() => toggleAuthMode('register')}
                  type="button"
                >
                  Sign Up
                </button>
              </div>

              {/* عنوان وتوجيه */}
              <div className="text-center mb-4">
                <h2 className="text-white fw-bold mb-2">
                  {isLogin ? 'Welcome Back!' : 'Create an Account'}
                </h2>
                <p className="text-muted small">
                  {isLogin ? 'Enter your details to access your account.' : 'Join us to get the best shopping experience.'}
                </p>
              </div>

              {/* نموذج الإدخال */}
              <form onSubmit={handleSubmit} className="auth-form">
                
                {/* حقول التسجيل (تظهر فقط في حالة إنشاء حساب) */}
                {!isLogin && (
                  <div className="form-group mb-3 fade-in-up">
                    <label className="text-secondary small mb-1">Full Name</label>
                    <div className="input-group-glass d-flex align-items-center rounded-3 px-3">
                      <i className="fa-regular fa-user text-muted"></i>
                      <input type="text" className="form-control bg-transparent border-0 text-white shadow-none" placeholder="John Doe" required />
                    </div>
                  </div>
                )}

                <div className="form-group mb-3 fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <label className="text-secondary small mb-1">Email Address</label>
                  <div className="input-group-glass d-flex align-items-center rounded-3 px-3">
                    <i className="fa-regular fa-envelope text-muted"></i>
                    <input type="email" className="form-control bg-transparent border-0 text-white shadow-none" placeholder="name@example.com" required />
                  </div>
                </div>

                <div className="form-group mb-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="d-flex justify-content-between align-items-end mb-1">
                    <label className="text-secondary small">Password</label>
                    {isLogin && (
                      <Link to="/forgot-password" className="text-info text-decoration-none small" style={{ fontSize: '0.8rem' }}>
                        Forgot Password?
                      </Link>
                    )}
                  </div>
                  <div className="input-group-glass d-flex align-items-center rounded-3 px-3">
                    <i className="fa-solid fa-lock text-muted"></i>
                    <input type="password" className="form-control bg-transparent border-0 text-white shadow-none" placeholder="••••••••" required />
                  </div>
                </div>

                <button type="submit" className="btn btn-info w-100 py-3 rounded-pill fw-bold mb-4 shadow-sm fade-in-up" style={{ animationDelay: '0.3s' }}>
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>

              </form>

              {/* خيارات الدخول الاجتماعي */}
              <div className="social-auth text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="position-relative mb-4">
                  <hr className="border-secondary opacity-25" />
                  <span className="position-absolute top-50 start-50 translate-middle bg-auth-card px-3 text-muted small">
                    Or continue with
                  </span>
                </div>
                
                <div className="d-flex gap-3 justify-content-center">
                  <button type="button" className="btn-social-glass">
                    <i className="fa-brands fa-google text-danger"></i>
                  </button>
                  <button type="button" className="btn-social-glass">
                    <i className="fa-brands fa-github text-white"></i>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;