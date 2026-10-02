import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // قراءة المفضلة من المتصفح
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('eMarketWishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // حفظ التحديثات تلقائياً
  useEffect(() => {
    localStorage.setItem('eMarketWishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // دالة التبديل: إضافة إذا لم يكن موجوداً، وحذف إذا كان موجوداً
  const toggleWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const isExist = prevItems.find((item) => item.id === product.id);
      if (isExist) {
        return prevItems.filter((item) => item.id !== product.id); // حذفه
      } else {
        return [...prevItems, product]; // إضافته
      }
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);