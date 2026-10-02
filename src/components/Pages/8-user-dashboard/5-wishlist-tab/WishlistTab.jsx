import React from 'react';
import { useWishlist } from '../../../../services/WishlistContext'; // تأكد من المسار
import {useCart} from '../../../../services/CartContext'; // تأكد من المسار
const WishlistTab = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="fade-in-content">
      <h3 className="text-white mb-4">My Wishlist</h3>
      
      {wishlistItems.length === 0 ? (
        <div className="glass-panel p-5 rounded-4 text-center border border-secondary border-opacity-25">
          <i className="fa-regular fa-heart fs-1 text-muted mb-3"></i>
          <h5 className="text-white">Your wishlist is empty</h5>
        </div>
      ) : (
        <div className="row g-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6">
              <div className="glass-panel p-3 rounded-4 d-flex align-items-center gap-3 h-100 border border-secondary border-opacity-25">
                <img src={item.image} alt={item.title} className="rounded-3" style={{ width: '85px', height: '85px', objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <h6 className="text-white mb-1 small">{item.title}</h6>
                  <div className="text-info fw-bold mb-2">${item.price}</div>
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-sm btn-info rounded-pill px-3 fw-semibold"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-danger rounded-circle px-2" 
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistTab;