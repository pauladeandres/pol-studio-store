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

const removeCartItem = (cartItems, productToRemove) => {

    const newCartItemsArray = [...cartItems]
    const productExists = newCartItemsArray.find((item) => (item.id === productToRemove.id))

    if(productExists) {
        newCartItemsArray.forEach((item, idx) => {
            if (item.id === productToRemove.id) {
                newCartItemsArray.splice(idx, 1)
            }
        })
    }
    return newCartItemsArray
}

const increaseCartQuantity = (cartItems, productToIncrease) => {
    const newCartItemsArray = [...cartItems]

    newCartItemsArray.map((item) => {
        if (item.id === productToIncrease.id) {
            return { ...item, quantity: ++item.quantity }
        }
    })
    return newCartItemsArray
}
const decreaseCartQuantity = (cartItems, productToIncrease) => {
    const newCartItemsArray = [...cartItems]

    newCartItemsArray.map((item, idx) => {
        if (item.id === productToIncrease.id) {
            if(item.quantity === 1) {
                newCartItemsArray.splice(idx, 1)
            } else {
                return { ...item, quantity: --item.quantity }
            }
        }
    })
    return newCartItemsArray
}

export const CartContext = createContext({
    cartQuantity: 0,
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    increaseItemQuantityInCart: () => { },
    decreaseItemQuantityInCart: () => { },
});

export const CartItemsProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
        let newCartQuantity = cartQuantity + 1
        setCartQuantity(newCartQuantity)
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
        let newCartQuantity = cartQuantity - 1
        setCartQuantity(newCartQuantity)
    }
    const increaseItemQuantityInCart = (productToIncrease) => {
        setCartItems(increaseCartQuantity(cartItems, productToIncrease))
        let newCartQuantity = cartQuantity + 1
        setCartQuantity(newCartQuantity)
    }
    const decreaseItemQuantityInCart = (productToIncrease) => {
        setCartItems(decreaseCartQuantity(cartItems, productToIncrease))
        let newCartQuantity = cartQuantity - 1
        setCartQuantity(newCartQuantity)
    }

    const value = { cartItems, cartQuantity, addItemToCart, removeItemFromCart, increaseItemQuantityInCart, decreaseItemQuantityInCart }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}