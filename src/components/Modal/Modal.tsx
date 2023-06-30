import { FC, FormEvent, FormEventHandler, ReactNode, useEffect } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type ModalProps ={
    onClose: ()=> void,
    children: ReactNode,
    title?: string,
}

const Modal:FC<ModalProps> = ({ onClose, children, title }) => {


    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.code === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [onClose])

    return createPortal(
        <div className={styles.modal}>
            <ModalOverlay onClose={onClose} />
            <div className={styles.modal__container}>
                <button type="button" className={styles.close} onClick={onClose}><CloseIcon type="primary" /></button>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.child__container}>
                    {children}
                </div>

            </div>
        </div>
        , document.querySelector('#modals') as HTMLElement

    )
}

// Modal.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     children: PropTypes.element.isRequired,
//     title: PropTypes.string
// }

export default Modal;