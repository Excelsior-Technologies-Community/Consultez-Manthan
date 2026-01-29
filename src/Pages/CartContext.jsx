import React from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i._id === product._id);
      if (existing) {
        return prev.map((i) =>
          i._id === product._id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [
        ...prev,
        {
          ...product,
          qty: 1,
          size: "Medium", // default
          id: product._id,
          name: product.title,
          img: product.image,
        },
      ];
    });
  };

  const updateQty = (id, type) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              qty: type === "inc" ? i.qty + 1 : Math.max(1, i.qty - 1),
            }
          : i
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, updateQty, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
