import React from 'react'
import styles from './Ingredients.module.css'
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter  } from '@ya.praktikum/react-developer-burger-ui-components'
function Ingredients({title, data, type}) {

  const dataPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  });
  
  Ingredients.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(dataPropTypes).isRequired
  }

  return (
    <div className={styles.main}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.oneType}>

        {data && data.map(item=>{
          return(
            item.type === type && 
            <div key ={item._id} className={styles.oneItem}>
          <Counter count={1} size="default" extraClass="m-1" />
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