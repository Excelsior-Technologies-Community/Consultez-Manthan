import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const stored = localStorage.getItem("cartItems");
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Failed to parse cart items from local storage", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add Item to Cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item._id === product._id);
            if (existingItem) {
                toast.success("Item quantity updated");
                return prevItems.map((item) =>
                    item._id === product._id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                toast.success("Item added to cart");
                return [...prevItems, { ...product, qty: 1 }];
            }
        });
    };

    // Remove Item from Cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
        toast.success("Item removed from cart");
    };

    // Update Quantity
    const updateQty = (id, type) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) => {
                    if (item._id === id) {
                        if (type === "inc") return { ...item, qty: item.qty + 1 };
                        if (type === "dec") return { ...item, qty: item.qty - 1 };
                    }
                    return item;
                })
                .filter((item) => item.qty > 0)
        );
    };

    // Clear Cart
    const clearCart = () => {
        setCartItems([]);
        toast.success("Cart cleared");
    };

    return (
        <CartContext.Provider
            value={{
                items: cartItems,
                addToCart,
                removeFromCart,
                updateQty,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
