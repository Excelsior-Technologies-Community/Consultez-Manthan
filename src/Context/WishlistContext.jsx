import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        try {
            const stored = localStorage.getItem("wishlistItems");
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Failed to parse wishlist items from local storage", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    // Add Item to Wishlist
    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => {
            const existingItem = prevItems.find((item) => item._id === product._id);
            if (existingItem) {
                toast.error("Item already in wishlist");
                return prevItems;
            } else {
                toast.success("Item added to wishlist");
                return [...prevItems, product];
            }
        });
    };

    // Remove Item from Wishlist
    const removeFromWishlist = (id) => {
        setWishlistItems((prevItems) => prevItems.filter((item) => item._id !== id));
        toast.success("Item removed from wishlist");
    };

    // Clear Wishlist
    const clearWishlist = () => {
        setWishlistItems([]);
        toast.success("Wishlist cleared");
    };

    return (
        <WishlistContext.Provider
            value={{
                items: wishlistItems,
                addToWishlist,
                removeFromWishlist,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
