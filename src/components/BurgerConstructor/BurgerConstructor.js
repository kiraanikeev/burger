import React, {useMemo} from 'react'
import styles from './BurgerConstructor.module.css'
import { data } from '../utils/data'
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
function BurgerConstructor() {
  const count = useMemo(() => data.reduce((accum, item) => accum + item.price, 0), [data])
  return (
    <div className={styles.main}>
      <ul className={styles.itemList}>
        {data && data.map(item=>{
          return(
            <li className={styles.itemElement} key={item._id}>
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
               />
            </li>
          )
        })}
      </ul>
      <div className={styles.priceLine}>
      <div className={styles.countPrice}>
        <span>{count}</span>
        <div className={styles.icon}>
        <CurrencyIcon type="primary"/>
        </div>
        
      </div>
      <Button htmlType="button" type="primary" size="large">
      Оформить заказ
      </Button>
      </div>
      </div>
  )
}

export default BurgerConstructor