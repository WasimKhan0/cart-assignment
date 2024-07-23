import React, { createContext, useState } from "react";
import Products from "./Products";

const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < 20; i++) {
        cart[i] = 0;
    }
    return cart;
};
export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [category, setCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");


    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));

    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Products.find((Product) => Product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        if(totalAmount===0)return 0;
        else return totalAmount+80;
    }
    const removeFromCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));

    };
    const delCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: 0 }));

    };

    const clearCart = () => {
        setCartItems(
            Products.reduce((acc, product) => {
                acc[product.id] = 0;
                return acc;
            }, {})
        );
    };
    const contextValue = {
        cartItems, addToCart,
        removeFromCart, getTotalAmount, category, setCategory, searchTerm,
        setSearchTerm, delCart, clearCart
    };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContext;