import styles from "./ModalOverlay.module.css";
import PropTypes from 'prop-types';

function ModalOverlay ({ setOpenModal }) {
    ModalOverlay.propTypes = {
        setOpenModal: PropTypes.func.isRequired
    }
    console.log('ModalOverlay')
    return (
        <div className={styles.overlay} onClick={()=>setOpenModal(false)}></div>
    )
}


export default ModalOverlay;