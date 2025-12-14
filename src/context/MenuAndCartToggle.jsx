import { createContext, useState } from "react";


export const MenuAndCartToggleContext = createContext();
export const MenuAndCartToggleProvider = ({ children }) => {

    const [menuToggle, setMenuToggle] = useState(false);
    const [cartToggle, setCartToggle] = useState(false);

    const closeMenuAndCart = () => {
        setCartToggle(false);
        setMenuToggle(false);
    }

    const handleMenuToggle = () => {
        setCartToggle(false);
        setMenuToggle(!menuToggle);
    }
    
    const handleCartToggle = () => {
        setMenuToggle(false);
        setCartToggle(!cartToggle);
    }

    return <MenuAndCartToggleContext.Provider
        value={{
            menuToggle, cartToggle,
            closeMenuAndCart, handleMenuToggle, handleCartToggle
        }}
    >
        {children}
    </MenuAndCartToggleContext.Provider>
}