import React, { useState, useMemo } from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredients from '../Ingredients/Ingredients'
import Modal from '../Modal/Modal';
import ModalIngridients from '../ModalIngridients/ModalIngridients';
import { useSelector } from 'react-redux';
function BurgerIngredients() {

  const [dataIngridients, setDataIngridients] = useState([])
  const ingredients  = useSelector((store) => store.ingredients.ingredients);

const [current, setCurrent] = useState('bun');
const [openModal, setOpenModal] = useState(false);
const [currentIngredient, setCurrentIngredient] = useState('');

  useMemo(()=>{
    console.log('ingredients' ,ingredients?.data)
    setDataIngridients(ingredients?.data)
    },[ingredients])

const onTabClick = (tab) => {
  setCurrent(tab)
  console.log('tab',tab)
  const element = document.getElementById(tab)
  console.log('element',element)
  if(element) element.scrollIntoView({behavior: 'smooth'})
}


  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <div className={styles.selector}>
        <div id="bun">
        <Tab value='bun' active={current === 'bun'} onClick={()=>onTabClick('bun')}>
          Булки
      </Tab>
        </div>
      <div  id="main">
      <Tab value='main' active={current === 'main'} onClick={()=>onTabClick('main')}>
          Соусы
      </Tab>
      </div>
      <div  id="sauce">
      <Tab id="sauce" value='sauce' active={current === 'sauce'} onClick={()=>onTabClick('sauce')}>
          Начинки
      </Tab>
      </div>
    </div>
    <section className={styles. ingredientsTypes}>
    <Ingredients title="Булки" dataIngridients={dataIngridients} type='bun' setOpenModal={setOpenModal} setCurrentIngredient={setCurrentIngredient}/>
    <Ingredients title="Соусы" dataIngridients={dataIngridients} type='sauce' setOpenModal={setOpenModal} setCurrentIngredient={setCurrentIngredient}/>
    <Ingredients title="Начинки" dataIngridients={dataIngridients} type='main' setOpenModal={setOpenModal} setCurrentIngredient={setCurrentIngredient}/>
    </section>
    {openModal && currentIngredient &&
    <Modal setOpenModal={setOpenModal} title="Детали ингредиента" >
      <ModalIngridients currentIngredient={currentIngredient}/>
      </Modal>}
      </div>
  )
}

export default React.memo(BurgerIngredients)