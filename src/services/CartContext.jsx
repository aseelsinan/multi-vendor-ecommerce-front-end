import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. قراءة السلة من Local Storage عند تحميل الموقع، أو البدء بمصفوفة فارغة
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('eMarketCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. حفظ السلة في Local Storage تلقائياً عند كل تغيير يحدث فيها (إضافة، حذف، تعديل)
  useEffect(() => {
    localStorage.setItem('eMarketCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, qty: 1 }];
      }
    });
    alert(`Added ${product.title} to cart!`); 
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (type === 'inc') return { ...item, qty: item.qty + 1 };
          if (type === 'dec' && item.qty > 1) return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};