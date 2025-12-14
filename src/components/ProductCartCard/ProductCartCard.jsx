import { useContext, useState } from "react";

// Context
import { CartContext } from "../../context/Cart";
import { ModalContext } from "../../context/Modal";

// Icons
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

// Styles
import style from './ProductCartCard.module.css';



export default function ProductCartCard(data) {
    const { removeProductFromCart, addProductToCart } = useContext(CartContext);
    const { setModal, setFunc, setFuncPayload, setMessage } = useContext(ModalContext);
    
    const handleRemoveFromCart = () => {
        setMessage('Deseas eliminar una unidad?');
        setFunc(() => removeProductFromCart);
        setFuncPayload(data.id);
        setModal(true);
    }

    const handleAddToCart = () => {
        setMessage('Deseas agregar otra unidad?');
        setFunc(() => addProductToCart);
        setFuncPayload(data);
        setModal(true);
    }

    return (
        <div className={style.container}>
            <img src={data.image} alt="wine" />
            <div className={style.container_content}>
                <div className={style.container_content_quantity}>
                    <span>{data.quantity}</span>
                    <div className={style.container_content_quantity_actions}>
                        <AiOutlineMinusCircle className={style.container_content_quantity_icon} onClick={handleRemoveFromCart} />
                        <AiOutlinePlusCircle className={style.container_content_quantity_icon} onClick={handleAddToCart} />
                    </div>
                </div>
                <div className={style.container_content_data}>
                    <span>{data.name}</span>
                    <span>{data.winery}</span>
                    <span>${data.price}</span>
                </div>
            </div>
        </div>
    )
}