import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const getCart = () => {
        const response = localStorage.getItem('cart');
        if (!response?.length) return;
        const storedCart = JSON.parse(response);
        setCart(storedCart);
    }

    const saveCart = (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
    }

    const addProductToCart = (prodData) => {
        const isInCart = cart.find(prod => prod.id === prodData.id);
        if (!isInCart) {
            cart.push({...prodData, quantity: 1});
            alert('Producto Añadido!');
            setTotal(total+prodData.price)
            saveCart(cart);
        } else {
            const newCart = cart.map(
                (prod) => {
                    if (prod.id === prodData.id && prod.quantity === prod.stock) alert('No queda mas stock');
                    else if (prod.id === prodData.id && prod.quantity < prod.stock) {
                        prod.quantity += 1;
                        setTotal(total+prod.price);
                        alert('Producto Añadido!');
                    }
                    return prod;
                }
            );
            saveCart(newCart);
        }
    }

    const removeProductFromCart = (id) => {
        const isInCart = cart.find(prod => prod.id === id);
        if (isInCart && isInCart.quantity > 1) {
            const newCart = cart.map(
                (prod) => {
                    if (prod.id === id) {
                        prod.quantity -= 1;
                        setTotal(total-prod.price)
                    }
                    return prod;
                }
            );
            saveCart(newCart);
        } else {
            const newCart = cart.filter(
                (prod) => {
                    if (prod.id !== id) return prod;
                    setTotal(total-prod.price)
                    return;
                }
            );
            saveCart(newCart);
        }
        alert('Producto Eliminado!');
    }

    const buyProds = () => {
        alert('Vinos comprados!');
        clearCart();
    }

    const clearCart = () => {
        getCart();
        if (!cart?.length) return;
        localStorage.removeItem('cart');
        setCart([]);
        setTotal(0);
    }

    useEffect(() => {
        getCart();
    }, [])

    return <CartContext.Provider
        value={{
            cart, total, setTotal,
            addProductToCart, removeProductFromCart,
            clearCart, buyProds
        }}
    >
        {children}
    </CartContext.Provider>
}