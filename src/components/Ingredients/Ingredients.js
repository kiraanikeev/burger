import React from 'react'
import styles from './Ingredients.module.css'
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter  } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux';
import { setCurrentIngredietntsAction } from '../../store/currentIngredientReducer';
function Ingredients({title, dataIngridients, type, setOpenModal}) {
const dispatch = useDispatch()
  const dataPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  });
  
  Ingredients.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    setOpenModal: PropTypes.func.isRequired,
    dataIngridients: PropTypes.arrayOf(dataPropTypes).isRequired
  }

const ingridientsHandle = (item)=>{
dispatch(setCurrentIngredietntsAction(item))
setOpenModal(true)
}
  return (
    <div className={styles.main}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.oneType}>

        {dataIngridients && dataIngridients.map(item=>{
          return(
            item.type === type && 
            <div key ={item._id} className={styles.oneItem} onClick={()=>ingridientsHandle(item)}>
          <Counter count={1} size="default" extraClass={styles.m-1} />
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

export default React.memo(Ingredients)