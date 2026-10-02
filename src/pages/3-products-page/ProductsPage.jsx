import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../components/Pages/1-index/2-productSection/ProductSection.css";
import { dummyAllProducts } from "../../services/products";
import { useCart } from "../../services/CartContext";
import { useWishlist } from "../../services/WishlistContext";

const ProductsPage = () => {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlistItems } = useWishlist();
  const { category_slug } = useParams();

  // فلترة المنتجات إذا كان هناك slug لتصنيف محدد، وإلا عرض كافة المنتجات
  const filteredProducts =
    category_slug && category_slug.trim() !== ""
      ? dummyAllProducts.filter(
          (product) => product.categorySlug === category_slug,
        )
      : dummyAllProducts;

  // إعدادات الـ Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // إعادة الصفحة إلى رقم 1 تلقائياً عند تغيير التصنيف
  useEffect(() => {
    setCurrentPage(1);
  }, [category_slug]);

  // حساب مؤشرات التقسيم والصفحة الحالية
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formattedCategoryTitle = category_slug
    ? category_slug.replace("-", " ").toUpperCase()
    : "All Products";

  return (
    <div className="products-page-wrapper py-5">
      <div className="container">
        {/* شريط التنقل الفرعي والترويسة */}
        <div className="mb-4 pb-3 border-bottom border-secondary border-opacity-25">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-2">
              <li className="breadcrumb-item">
                <Link to="/" className="text-info text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link
                  to="/categories"
                  className="text-info text-decoration-none"
                >
                  Categories
                </Link>
              </li>
              <li
                className="breadcrumb-item active text-muted"
                aria-current="page"
              >
                {formattedCategoryTitle}
              </li>
            </ol>
          </nav>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <div>
              <h1 className="text-white fw-bold mb-1">
                {formattedCategoryTitle}
              </h1>
              <p className="text-muted mb-0">
                Showing{" "}
                {filteredProducts.length > 0 ? indexOfFirstProduct + 1 : 0} -{" "}
                {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} results
              </p>
            </div>

            {/* فلتر الترتيب */}
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted small">Sort By:</span>
              <select
                className="form-select bg-dark text-white border-secondary border-opacity-50"
                style={{ width: "auto" }}
              >
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* شبكة المنتجات */}
        {currentProducts.length > 0 ? (
          <>
            <div className="row g-4 mb-5">
              {currentProducts.map((product) => {
                // التحقق من حالة المفضلة لكل منتج على حدة
                const isWished = wishlistItems.some(
                  (item) => item.id === product.id,
                );

                return (
                  <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                    <div className="product-card">
                      <div className="product-img-wrapper">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="product-img"
                        />

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

                        <span className="vendor-badge">
                          <i className="fa-solid fa-store me-1"></i>{" "}
                          {product.vendor}
                        </span>
                      </div>

                      <div className="product-card-body">
                        <span className="product-category">
                          {product.category}
                        </span>

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
                          <span className="ms-1">({product.rating})</span>
                        </div>

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

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                aria-label="Products pagination"
                className="d-flex justify-content-center mt-4"
              >
                <ul className="pagination custom-glass-pagination gap-2">
                  <li
                    className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                      <li
                        key={pageNum}
                        className={`page-item ${currentPage === pageNum ? "active" : ""}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </button>
                      </li>
                    ),
                  )}

                  <li
                    className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </>
        ) : (
          <div className="text-center py-5">
            <i className="fa-solid fa-box-open text-muted display-1 mb-3"></i>
            <h3 className="text-white">No products found in this category</h3>
            <p className="text-muted">
              Check back later or browse other collections.
            </p>
            <Link
              to="/products"
              className="btn btn-outline-info rounded-pill px-4 mt-2"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;