import React from 'react'
import styles from './Ingredients.module.css'
import { CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
function Ingredients({title, data, type}) {
  return (
    <div className={styles.main}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.oneType}>
        {data && data.map(item=>{
          return(
            item.type === type && 
            <div key ={item._id} className={styles.oneItem}>
              <img src={item.image} className={styles.img} alt={item.name}/>
    <div className={styles.priceSection}>
     <p className={styles.price}>{item.price}</p>
     <CurrencyIcon type="primary" />
    </div>
    <p className={styles.name}>{item.name}</p>
    </div>
          )
        })}
     </div>
    </div>
  )
}

export default Ingredients