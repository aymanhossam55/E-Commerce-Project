import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component to provide the cart context to its children
export const CartProvider = ({ children }) => {
    // Initialize the cart state from localStorage if available, otherwise default to an empty array
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };


    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    // Function to clear the entire cart
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    // Use an effect to save the cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart , clearCart}}>
            {children}
        </CartContext.Provider>
    );
};
