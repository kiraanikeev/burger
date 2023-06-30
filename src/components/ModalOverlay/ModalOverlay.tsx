import styles from "./ModalOverlay.module.scss";
import PropTypes from 'prop-types';
import {FC} from "react";

type ModalOverlayProps ={
    onClose: ()=>void
}

const ModalOverlay:FC<ModalOverlayProps> = ({ onClose}) => {
    return (
        <div className={styles.overlay} onClick={onClose}></div>
    )
}

// ModalOverlay.propTypes = {
//     onClose: PropTypes.func.isRequired
// }

export default ModalOverlay;