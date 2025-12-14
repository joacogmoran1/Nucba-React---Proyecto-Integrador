import { useContext } from "react";

// Contexts
import { ModalContext } from "../../context/Modal";

// Style
import style from "./ConfirmModal.module.css";


export default function ConfirmModal() {
    const { modal, message, onCancel, onConfirm } = useContext(ModalContext);

    if (!modal) return null;
    return <div className={style.container}>
        <p>{message || "¿Estás seguro?"}</p>
        <div className={style.container_btns}>
            <button onClick={onCancel}>Cancelar</button>
            <button onClick={onConfirm}>Confirmar</button>
        </div>
    </div>
}
