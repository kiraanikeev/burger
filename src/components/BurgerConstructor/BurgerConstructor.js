import React, {useMemo, useState} from 'react'
import styles from './BurgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrder } from '../../asyncActions/order';
function BurgerConstructor() {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false);
  const constructorIngredients  = useSelector((store) => store.constructor.constructorIngredients)
  const orderNumber = useSelector(store => store.order.order)
  const count = useMemo(() => constructorIngredients && constructorIngredients.reduce((accum, item) => accum + item.price, 0), [constructorIngredients])

  const createOrder = () =>{
    setOpenModal(true)
    const idArray = constructorIngredients.map(item => item._id)
    dispatch(fetchOrder(idArray))
  }
  return (
    <div className={styles.main}>
     {constructorIngredients && constructorIngredients.length && <div>
      <span className={styles.externalList}>
        {constructorIngredients && 
        <ConstructorElement
        isLocked={true}
        type="top"
        text={constructorIngredients[0].name}
        price={constructorIngredients[0].price}
        thumbnail={constructorIngredients[0].image}
          />}</span>
      <ul className={styles.itemList}>
        {constructorIngredients && constructorIngredients.map((item, index)=>{
          return(
            index > 0 && index < constructorIngredients.length - 1 &&
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
      {constructorIngredients && 
        <ConstructorElement
        isLocked={true}
        type="bottom"
        text={constructorIngredients[constructorIngredients.length - 1].name}
        price={constructorIngredients[constructorIngredients.length - 1].price}
        thumbnail={constructorIngredients[constructorIngredients.length - 1].image}
          />}
      </span>
      <div className={styles.priceLine}>
      <div className={styles.countPrice}>
        <span>{count}</span>
        <div className={styles.icon}>
        <CurrencyIcon type="primary"/>
        </div>
        
      </div>
      <Button onClick={()=>createOrder()} htmlType="button" type="primary" size="large">
      Оформить заказ
      </Button>
      </div>
      {openModal && 
      <Modal title='' setOpenModal={setOpenModal}>
        <OrderDetails orderNumber={orderNumber} />
      </Modal>}
      </div>}
      </div>
  )
}

export default React.memo(BurgerConstructor)