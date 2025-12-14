import { useContext } from "react";

// Context
import { MenuAndCartToggleContext } from "../../context/MenuAndCartToggle";
import { CartContext } from "../../context/Cart";
import { ModalContext } from "../../context/Modal";

// Components
import CartList from "../CartList/CartList";

// Icons
import { AiOutlineShoppingCart, AiOutlineRest, AiOutlineCreditCard } from "react-icons/ai";

// Styles
import style from './Cart.module.css';



export default function Cart() {
    const { cartToggle, handleCartToggle } = useContext(MenuAndCartToggleContext);
    const { cart, total, clearCart, buyProds } = useContext(CartContext);
    const { setModal, setFunc, setMessage } = useContext(ModalContext);

    const handleDeleteProds = () => {
        setMessage('Deseas eliminar los vinos?');
        setFunc(() => clearCart);
        setModal(true);
    }

    const handleBuyProds = () => {
        setMessage('Deseas comprar los vinos?');
        setFunc(() => buyProds);
        setModal(true);
    }

    return <div className={style.cart}>
        <AiOutlineShoppingCart className={style.cart_icon} onClick={handleCartToggle} />
        <div className={[style.cart_container, cartToggle? style.cart_container_open : style.cart_container_closed].join(' ')}>
            <div className={style.cart_container_header}>
                <span className={style.cart_container_header_span}>Carrito:</span>
                <AiOutlineRest
                    className={style.cart_container_header_icon}
                    onClick={handleDeleteProds}
                    disabled={!cart?.length}
                />
            </div>
            <div className={style.cart_container_body}>
                <CartList />
            </div>
            <div className={style.cart_container_footer}>
                <span className={style.cart_container_footer_span}>Total: ${total}</span>
                <AiOutlineCreditCard
                    className={style.cart_container_footer_icon}
                    onClick={handleBuyProds}
                />
            </div>
        </div>
    </div>
}