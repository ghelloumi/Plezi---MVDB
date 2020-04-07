import React, {useEffect, useRef} from 'react';
import Image from "./Image";
import {ALTS, IMAGES} from "../../utils/contants";

const Modal = ({children, close}) => {
    const modalContainer = useRef(null)
    const modalContainerClose = useRef(null)

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (modalContainer.current && modalContainerClose.current) {
                if (!modalContainer.current.contains(e.target) || modalContainerClose.current.childNodes[0] === e.target) {
                    handleCloseModal()
                }
            }
        });
        return () => {
            window.removeEventListener("click", null)
        }
    })

    const handleCloseModal = () => {
        close()
    }

    return (
        <div className="modal">
            <div className="modal__container" ref={modalContainer}>
                <div className="modal__container__close" ref={modalContainerClose}>
                    <Image src={IMAGES.close} alt={ALTS.CLOSE_MODEL_ALT} onClick={handleCloseModal}/>
                </div>
                <div className="modal__container__content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
