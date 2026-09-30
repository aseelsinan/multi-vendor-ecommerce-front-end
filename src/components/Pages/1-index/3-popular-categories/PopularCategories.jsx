import React from 'react';
import { Link } from 'react-router-dom';
import './PopularCategories.css'; // سننشئ هذا الملف تالياً

const dummyCategories = [
  { id: 1, title: 'Electronics', icon: 'fa-solid fa-laptop', slug: 'electronics', items: '124' },
  { id: 2, title: 'Gaming', icon: 'fa-solid fa-gamepad', slug: 'gaming', items: '89' },
{ id: 3, title: 'Wearables', icon: 'fa-solid fa-stopwatch', slug: 'wearables', items: '56' },
 { id: 4, title: 'Accessories', icon: 'fa-solid fa-headphones', slug: 'accessories', items: '210' },
  { id: 5, title: 'Smart Home', icon: 'fa-solid fa-house-signal', slug: 'smart-home', items: '43' },
  { id: 6, title: 'Cameras', icon: 'fa-solid fa-camera', slug: 'cameras', items: '72' },
];

const PopularCategories = () => {
  return (
    <section className="categories-wrapper pt-5 pb-2">
      <div className="container">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="section-title mb-1">Top Categories</h2>
          <p className="section-subtitle mb-0">Browse our collection by popular categories</p>
        </div>

        {/* Categories Grid */}
        <div className="row g-3">
          {dummyCategories.map((cat) => (
            <div key={cat.id} className="col-6 col-md-4 col-lg-2">
              <Link to={`/category/${cat.slug}`} className="category-card text-decoration-none">
                <div className="category-icon-wrapper">
                  <i className={`${cat.icon} category-icon`}></i>
                </div>
                <h3 className="category-title">{cat.title}</h3>
                <span className="category-items">{cat.items} Products</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;