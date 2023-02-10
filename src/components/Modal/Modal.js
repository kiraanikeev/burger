import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
function Modal({title, setOpenModal, children}) {
    Modal.propTypes = {
        setOpenModal: PropTypes.func.isRequired, 
        children: PropTypes.element.isRequired, 
        title: PropTypes.string
    }
    useEffect(() => {
      const keyDownHandler = event => {
        if (event.key === 'Escape') {
          setOpenModal(false)
        }
      };
      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, []);

  return createPortal(
    <div className={styles.modal}>
    <ModalOverlay setOpenModal={setOpenModal}/>
    <div
    tabIndex='0'
    className={styles.container}
    onKeyDown={(event)=>{
        console.log('111331')
        if(event.key === 'Escape'){
            setOpenModal(false)
            console.log('1111')
        }
        
    }}>
      <button type="button" className={styles.button} onClick={()=>setOpenModal(false)}>
      <CloseIcon type="primary" />
     </button>
     <h2 className={styles.title}>{title}</h2>
     <div className={styles.children}>
        {children}
    </div>
    </div>
    </div>
    , document.body
  )
}

export default Modal