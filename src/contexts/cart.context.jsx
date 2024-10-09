import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
});

export const CartItemsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const value = { cartItems }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}