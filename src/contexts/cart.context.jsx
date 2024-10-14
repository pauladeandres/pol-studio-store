import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const newProductId = productToAdd.id
    const newCartItemsArray = [...cartItems]

    const productExists = newCartItemsArray.find((item) => (item.id === productToAdd.id))

    if(productExists) {
            newCartItemsArray.map((cartItem) => 
                cartItem.id === newProductId ? { ...cartItem, quantity: ++cartItem.quantity } : cartItem
        )
    } else {
        newCartItemsArray.push({ ...productToAdd, quantity: 1 })
    } 

    return newCartItemsArray
}

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {}
});

export const CartItemsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { cartItems, addItemToCart }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}