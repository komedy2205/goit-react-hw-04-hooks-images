import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, Modals } from '../styles';

const modalRoot = document.querySelector('#modal-root');

export default function Modal ({onClose, children}) {

    const handleKeyDown = e => {
        console.log(e)
        if (e.code === 'Escape') {
            onClose();
        }
    };
    
    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown)
        window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])
    

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

        return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <Modals className="modal">
                    {children}
                </Modals>
            </Overlay>
            , modalRoot);
};