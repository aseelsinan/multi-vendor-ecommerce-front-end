import React from "react";
import { Link } from "react-router-dom";
import "./ProductSection.css";
import { useCart } from "../../../../services/CartContext";
import { useWishlist } from "../../../../services/WishlistContext";

const ProductSection = ({ title, subtitle, products }) => {
  const { toggleWishlist, wishlistItems } = useWishlist();
  const { addToCart } = useCart();

  return (
    <section className="products-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4 pb-2 border-bottom border-secondary border-opacity-25">
          <div>
            <h2 className="section-title mb-1">{title}</h2>
            <p className="section-subtitle mb-0">{subtitle}</p>
          </div>
          <div>
            <Link
              to="/products"
              className="btn btn-outline-info px-4 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 view-all-btn"
            >
              <span>View All</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="row g-4">
          {products.map((product) => {
            // التحقق هنا داخل الدورة لكل منتج
            const isWished = wishlistItems.some((item) => item.id === product.id);

            return (
              <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                <div className="product-card">
                  {/* Product Media */}
                  <div className="product-img-wrapper">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-img"
                    />

                    {/* Floating Actions */}
                    <div className="card-quick-actions">
                      <button
                        className="btn-action-icon"
                        title="Wishlist"
                        onClick={() => toggleWishlist(product)}
                      >
                        <i
                          className={`${
                            isWished ? "fa-solid text-danger" : "fa-regular"
                          } fa-heart`}
                        ></i>
                      </button>
                      <Link
                        to={`/product/${product.slug}`}
                        className="btn-action-icon text-decoration-none"
                        title="Quick View"
                      >
                        <i className="fa-regular fa-eye"></i>
                      </Link>
                    </div>

                    {/* Vendor Tag */}
                    <span className="vendor-badge">
                      <i className="fa-solid fa-store me-1"></i> {product.vendor}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="product-card-body">
                    <span className="product-category">{product.category}</span>

                    <Link
                      to={`/product/${product.slug}`}
                      className="text-decoration-none"
                    >
                      <h3 className="product-title" title={product.title}>
                        {product.title}
                      </h3>
                    </Link>

                    <div className="product-rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                      <span>({product.rating})</span>
                    </div>

                    {/* Card Bottom */}
                    <div className="product-footer">
                      <div className="product-price">
                        <span>$</span>
                        {product.price}
                      </div>

                      <button
                        className="btn-add-cart"
                        title="Add to Cart"
                        onClick={() => addToCart(product)}
                      >
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;