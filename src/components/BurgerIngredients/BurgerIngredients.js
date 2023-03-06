import React, { useState, useMemo, useEffect } from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredients from '../Ingredients/Ingredients'
import Modal from '../Modal/Modal';
import ModalIngridients from '../ModalIngridients/ModalIngridients';
import { useSelector,useDispatch } from 'react-redux';
import { deleteCurrentIngredietntsAction } from '../../store/currentIngredientReducer';
import { useInView } from 'react-intersection-observer';
function BurgerIngredients() {
  const dispatch = useDispatch()
  const [dataIngridients, setDataIngridients] = useState([])
  const ingredients  = useSelector((store) => store.ingredients.ingredients);

  const [current, setCurrent] = useState('bun');
  const [openModal, setOpenModal] = useState(false);


  useMemo(()=>{
    setDataIngridients(ingredients?.data)
    },[ingredients])

    useMemo(()=>{
    if(!openModal){
    dispatch(deleteCurrentIngredietntsAction())
    }
    },[openModal])

const [bonsRef, inViewBons] = useInView({
  threshold: 0
})
const [mainsRef, inViewMains] = useInView({
  threshold: 0
})
const [soucesRef, inViewSouces] = useInView({
  threshold: 0
})
useEffect(()=>{
if(inViewBons){
  setCurrent('bun')
}else if(inViewSouces){
  setCurrent('main')
}else if(inViewMains){
  setCurrent('sauce')
}
},[inViewBons,inViewMains, inViewSouces])

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <div className={styles.selector}>
        <div id="bun">
        <Tab value='bun' active={current === 'bun'}>
          Булки
      </Tab>
        </div>
      <div  id="main">
      <Tab value='main' active={current === 'main'}>
          Соусы
      </Tab>
      </div>
      <div  id="sauce">
      <Tab id="sauce" value='sauce' active={current === 'sauce'}>
          Начинки
      </Tab>
      </div>
    </div>
    <section className={styles. ingredientsTypes}>
    <Ingredients title="Булки" dataIngridients={dataIngridients} type='bun' setOpenModal={setOpenModal} ref={bonsRef}/>
    <Ingredients title="Соусы" dataIngridients={dataIngridients} type='sauce' setOpenModal={setOpenModal} ref={soucesRef}/>
    <Ingredients title="Начинки" dataIngridients={dataIngridients} type='main' setOpenModal={setOpenModal} ref={mainsRef}/>
    </section>
    {openModal && 
    <Modal setOpenModal={setOpenModal} title="Детали ингредиента" >
      <ModalIngridients />
      </Modal>}
      </div>
  )
}

export default React.memo(BurgerIngredients)