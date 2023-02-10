import React, { useState } from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredients from '../Ingredients/Ingredients'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import ModalIngridients from '../ModalIngridients/ModalIngridients';

function BurgerIngredients({dataIngridients}) {

  const ingredientPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
});

BurgerIngredients.propTypes = {
  dataIngridients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

const [current, setCurrent] = useState('one');
const [openModal, setOpenModal] = useState(false);
const [currentIngredient, setCurrentIngredient] = useState('');
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <div className={styles.selector}>
     <Tab value='one' active={current === 'one'} onClick={setCurrent}>
          Булки
      </Tab>
      <Tab value='two' active={current === 'two'} onClick={setCurrent}>
          Соусы
      </Tab>
      <Tab value='three' active={current === 'three'} onClick={setCurrent}>
          Начинки
      </Tab>
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

export default BurgerIngredients