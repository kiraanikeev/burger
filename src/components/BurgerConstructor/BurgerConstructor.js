import React, {useMemo, useState} from 'react'
import styles from './BurgerConstructor.module.css'
import { data } from '../utils/data'
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
function BurgerConstructor() {
  const [openModal, setOpenModal] = useState(false);
  const count = useMemo(() => data.reduce((accum, item) => accum + item.price, 0), [data])
  return (
    <div className={styles.main}>
      <span className={styles.externalList}>
        {data && 
        <ConstructorElement
        isLocked={true}
        type="top"
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
          />}</span>
      <ul className={styles.itemList}>
        {data && data.map((item, index)=>{
          return(
            index > 0 && index < data.length - 1 &&
            <li className={styles.itemElement} key={item._id}>
                <span  className={styles.DragIcon}><DragIcon type="primary"/></span>
                <ConstructorElement
                  isLocked={false}
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                  />
            </li>
          )
        })}
      </ul>
      <span className={styles.externalList}>
      {data && 
        <ConstructorElement
        isLocked={true}
        type="bottom"
        text={data[data.length - 1].name}
        price={data[data.length - 1].price}
        thumbnail={data[data.length - 1].image}
          />}
      </span>
      <div className={styles.priceLine}>
      <div className={styles.countPrice}>
        <span>{count}</span>
        <div className={styles.icon}>
        <CurrencyIcon type="primary"/>
        </div>
        
      </div>
      <Button onClick={()=>setOpenModal(true)}htmlType="button" type="primary" size="large">
      Оформить заказ
      </Button>
      </div>
      {openModal && 
      <Modal title='' setOpenModal={setOpenModal}>
        <OrderDetails />
      </Modal>}
      </div>
  )
}

export default BurgerConstructor