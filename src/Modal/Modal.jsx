import React from 'react';
import './Modal.css'
import { IoIosClose } from "react-icons/io";
import { Transition } from "react-transition-group";


export const Modal = ({ isOpen, onClose, children }) => {
    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose();
    };
    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
                {(state) => (
                    <div className={`modal modal--${state}`}>
                        <div className="modal-wrapper" onClick={onWrapperClick}>
                            <div className="modal-content">
                                <button
                                    className="modal-close-button"
                                    onClick={() => onClose()}
                                >
                                    <IoIosClose />
                                </button>
                                {children}
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
};