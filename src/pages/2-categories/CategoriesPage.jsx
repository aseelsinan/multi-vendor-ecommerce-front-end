import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Pages/1-index/3-popular-categories/PopularCategories.css';

const allCategories = [
  { id: 1, title: 'Electronics', icon: 'fa-solid fa-laptop', slug: 'electronics', items: '124' },
  { id: 2, title: 'Gaming', icon: 'fa-solid fa-gamepad', slug: 'gaming', items: '89' },
  { id: 3, title: 'Wearables', icon: 'fa-solid fa-stopwatch', slug: 'wearables', items: '56' },
  { id: 4, title: 'Accessories', icon: 'fa-solid fa-headphones', slug: 'accessories', items: '210' },
  { id: 5, title: 'Smart Home', icon: 'fa-solid fa-house-signal', slug: 'smart-home', items: '43' },
  { id: 6, title: 'Cameras', icon: 'fa-solid fa-camera', slug: 'cameras', items: '72' },
  { id: 7, title: 'Fashion', icon: 'fa-solid fa-shirt', slug: 'fashion', items: '340' },
  { id: 8, title: 'Books', icon: 'fa-solid fa-book', slug: 'books', items: '512' },
  { id: 9, title: 'Sports', icon: 'fa-solid fa-basketball', slug: 'sports', items: '115' },
  { id: 10, title: 'Automotive', icon: 'fa-solid fa-car', slug: 'automotive', items: '88' },
  { id: 11, title: 'Health & Beauty', icon: 'fa-solid fa-spa', slug: 'health-beauty', items: '205' },
  { id: 12, title: 'Toys', icon: 'fa-solid fa-puzzle-piece', slug: 'toys', items: '150' },
];

const CategoriesPage = () => {
  return (
    <div className="categories-page-wrapper py-5">
      <div className="container">
        
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-white mb-3">All Categories</h1>
          <p className="text-muted fs-5 max-w-75 mx-auto">
            Explore our vast directory of product categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="row g-4">
          {allCategories.map((cat, index) => (
            <div key={cat.id} className="col-6 col-md-4 col-lg-3">
              <Link to={`/category/${cat.slug}`} className="category-card text-decoration-none h-100">
                <div className="category-icon-wrapper">
                  <i className={`${cat.icon} category-icon`}></i>
                </div>
                <span className="badge bg-secondary mb-2 opacity-75">#{index + 1}</span>
                <h3 className="category-title fs-5">{cat.title}</h3>
                <span className="category-items">{cat.items} Products</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CategoriesPage;