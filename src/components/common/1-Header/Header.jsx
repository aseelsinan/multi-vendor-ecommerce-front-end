import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useCart } from "../../../services/CartContext";

const Header = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="header-wrapper sticky-top">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid px-4 px-lg-5">
          {/* الشعار */}
          <h1>22</h1>
          <Link
            className="navbar-brand fw-bold brand-logo text-decoration-none"
            to="/"
          >
            <span className="brand-accent">E</span>-Market
          </Link>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-2">
              {/* روابط التصفح الأساسية */}
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/vendors">
                  Vendors
                </Link>
              </li>

              {/* أيقونة السلة (Cart) مع إشعار العدد */}
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0 d-flex align-items-center">
                <Link
                  className="nav-link text-white position-relative"
                  to="/cart"
                  title="View Cart"
                >
                  <i className="fa-solid fa-cart-shopping fs-5 transition-transform hover-scale"></i>
                  {/* الدائرة الزرقاء التي تظهر عدد المنتجات */}
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-dark"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {totalItems}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                </Link>
              </li>

              {/* زر تسجيل الدخول */}
              <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
                <Link
                  className="btn btn-modern-login text-decoration-none"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
