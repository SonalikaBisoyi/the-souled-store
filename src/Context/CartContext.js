import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }

    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.product.id !== product.id);
    setCartItems(updatedCartItems);
    setCartCount((prevCount) => prevCount - 1);
  };

  const clearCartItems = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, clearCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
