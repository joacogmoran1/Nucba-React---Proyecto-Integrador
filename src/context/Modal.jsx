import { createContext, useEffect, useState } from "react";


export const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(false);

    const [func, setFunc] = useState(null);
    const [funcPayload, setFuncPayload] = useState(null);
    const [message, setMessage] = useState('');

    const onCancel = () => {
        setFunc(null);
        setFuncPayload(null);
        setModal(false);
    }

    const onConfirm = () => {
        func(funcPayload);
        setModal(false);
    }

    useEffect(
        () => {
            setModal(false)
        }, []
    );

    return <ModalContext.Provider
        value={{
            modal, message,
            setModal, setMessage, setFunc, setFuncPayload,
            onConfirm, onCancel
        }}
    >
        {children}
    </ModalContext.Provider>
}