import { useContext } from "react";

// Contexts
import { CartContext } from "../../context/Cart";
import { ModalContext } from "../../context/Modal";

// Icons
import { AiOutlineShoppingCart } from "react-icons/ai";

// Styles
import style from './ProductCard.module.css';
import Span from "../ui/Span/Span";



export default function ProductCard(prodData) {    
    const { addProductToCart } = useContext(CartContext);
    const { setModal, setFunc, setFuncPayload } = useContext(ModalContext);

    const handleAddToCart = () => {
        setFunc(() => addProductToCart);
        setFuncPayload(prodData);
        setModal(true);
    }

    return <>
        <div className={style.container}>
            <div className={style.container_header}>
                <img src={prodData.image} alt={name} />
            </div>
            <div className={style.container_body}>
                <div className={style.container_body_name}>
                    <Span text={prodData.name} />
                </div>
                <div className={style.container_body_data}>
                    <div className={style.container_body_data_wine}>
                        <Span text={prodData.winery} />
                        <Span text={prodData.year} />
                    </div>
                </div>
            </div>
            <div className={style.container_footer}>
                <Span text={`$${prodData.price}`} />
                <AiOutlineShoppingCart
                    className={style.container_footer_btn}
                    onClick={handleAddToCart}
                />
            </div>
        </div>
    </>
}