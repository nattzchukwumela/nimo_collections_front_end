/**
 * @fileoverview This file contains the context and provider for managing the shopping cart state.
 */

import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext(null);
const items = import.meta.env.VITE_API_GET_ALL_PRODUCTS;

const fetchProductData = async () => {
  try {
    const response = await fetch(items);
    if (!response.ok) {
      console.log(response, 'from cart context');
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json, 'from cart context');
    return json;
  } catch (error) {
    console.error(error, 'from cart context');
    return [];
  }
};

const defaultCart = (productData) => {
  return productData.reduce((acc, item) => {
    acc[item.id] = { ...item, quantity: 0 };
    return acc;
  }, {});
};

/**
 * Context provider for managing the shopping cart state.
 * @param {Object} props - The props for the provider.
 * @param {Object} props.children - The children components.
 */
export const CartContextProvider = (props) => {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeCart = async () => {
      const productData = await fetchProductData();
      const initialCart = defaultCart(productData);
      setCart(initialCart);
      setLoading(false);
      console.log(loading, 'from cart context');
    };

    initializeCart();
  }, [loading]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  const addToCart = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId], quantity: prev[itemId].quantity + 1 },
    }));
    console.log(cart[itemId].quantity, 'from cart context addtocart button');
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId], quantity: Math.max(prev[itemId].quantity - 1, 0) },
    }));
  };

  const updateCart = (newAmount, itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId], quantity: newAmount },
    }));
  };

  const cartValues = Object.values(cart);
  const cartValue = {
    addToCart,
    removeFromCart,
    updateCart,
    cart,
    cartValues,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};