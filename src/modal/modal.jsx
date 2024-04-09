import React from 'react';
import './modal.css'
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = () => {
    return (
        <div className='modal'>
            <div className='modal-wrapper'>
                <div className='modal-content'>
                    <button className='modal-close-button'><IoIosCloseCircleOutline /></button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
