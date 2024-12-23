import { useState, useEffect } from 'react';
import { CartContext } from './cartContext';
import PropTypes from 'prop-types';

const items = import.meta.env.VITE_API_GET_ALL_PRODUCTS;

const fetchProductData = async () => {
  try {
    const response = await fetch(items);
    if (!response.ok) {
      console.log(response, 'from cart context');
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
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

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeCart = async () => {
      const productData = await fetchProductData();
      const initialCart = defaultCart(productData);
      setCart(initialCart);
      setLoading(false);
    };

    initializeCart();
  }, [loading]);

  const addToCart = (itemId) => {
    setCart((prev) => {
        const updatedItem = {
            ...prev[itemId],
            quantity: prev[itemId].quantity + 1
        };

        const updatedCart = {
            ...prev,
            [itemId]: updatedItem
        };

        // Get existing cart from localStorage
        const storedCart = localStorage.getItem('cart');
        let cartStorage = storedCart ? JSON.parse(storedCart) : {};

        // Only store items with quantity > 0
        if (updatedItem.quantity > 0) {
            cartStorage[itemId] = updatedItem;
        } else {
            delete cartStorage[itemId];
        }

        // Save back to localStorage
        localStorage.setItem('cart', JSON.stringify(cartStorage));

        return updatedCart;
    });
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
