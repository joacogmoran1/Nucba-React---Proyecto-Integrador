import { Outlet, useLocation } from "react-router";
import { useContext, useEffect } from "react";

// Context
import { MenuAndCartToggleContext } from "../../context/MenuAndCartToggle.jsx";
import { ModalContext } from "../../context/Modal.jsx";

// Components
import ConfirmModal from "../ConfirmModal/ConfirmModal.jsx";
import Overlay from "../Overlay/Overlay.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

// Styles
import style from './Layout.module.css';





export default function Layout() {
    const { menuToggle, cartToggle, closeMenuAndCart } = useContext(MenuAndCartToggleContext);
    const { modal } = useContext(ModalContext);
    const { pathname } = useLocation();
    
    useEffect(
        () => {
            if (menuToggle || cartToggle || modal) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "auto";

            // Limpieza al desmontar
            return () => document.body.style.overflow = "auto";
        }, [menuToggle, cartToggle, modal]
    );

    useEffect(
        () => {
            window.scrollTo(0, 0);
        }, [pathname]
    );

    return <>
        <Header />
        <ConfirmModal />
        <Overlay />
        <main className={style.main} onClick={closeMenuAndCart}>
            <Outlet />
        </main>
        <Footer />
    </>
}