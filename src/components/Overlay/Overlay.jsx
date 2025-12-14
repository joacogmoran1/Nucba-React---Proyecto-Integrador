import { useContext } from 'react';

// Contexts
import { MenuAndCartToggleContext } from '../../context/MenuAndCartToggle';
import { ModalContext } from '../../context/Modal';

// Styles
import style from './Overlay.module.css';


export default function Overlay() {
    const { menuToggle, cartToggle, closeMenuAndCart } = useContext(MenuAndCartToggleContext);
    const { modal } = useContext(ModalContext);
    return <div
        className={[style.overlay, menuToggle || cartToggle || modal? '' : style.overlay_hidden].join(' ')}
        onClick={closeMenuAndCart}
    ></div>
}