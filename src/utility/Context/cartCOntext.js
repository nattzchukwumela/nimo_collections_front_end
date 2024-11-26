/**
 * @fileoverview This file contains the context and provider for managing the shopping cart state.
 */

import { createContext, useState } from "react";
import { PRODUCTS } from "../allItems";

/**
 * Context for the shopping cart.
 * @type {React.Context}
 */
export const ShopContext = createContext(null);

/**
 * Creates a default cart object with all product quantities set to 0.
 * @returns {Object} An object with product IDs as keys and quantities as values.
 */
const getDefaultCart = () => {
  return PRODUCTS.reduce((item, items) => {
    item[items.id] = 0;
    return item;
  }, {});
};

/**
 * Provider component for the shopping cart context.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 */
export const ShopContextProvider = (props) => {
  /**
   * State for storing cart items.
   * @type {[Object, Function]}
   */
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems);

  /**
   * Calculates the total amount of all items in the cart.
   * @returns {number} The total cart amount.
   */
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  /**
   * Adds an item to the cart.
   * @param {number} itemId - The ID of the item to add.
   */
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  /**
   * Removes an item from the cart.
   * @param {number} itemId - The ID of the item to remove.
   */
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  /**
   * Updates the quantity of an item in the cart.
   * @param {number} newAmount - The new quantity of the item.
   * @param {number} itemId - The ID of the item to update.
   */
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  /**
   * Resets the cart to its default state (empty).
   */
  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  /**
   * The value object to be provided by the context.
   * @type {Object}
   */
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};