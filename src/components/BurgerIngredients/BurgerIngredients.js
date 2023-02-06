import React, { useState } from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../utils/data'
import Ingredients from '../Ingredients/Ingredients'

function BurgerIngredients() {
  const [selectIngredients, setSelectIngredients] = useState('Булки')
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Соберите бургер</h2>
     <a href={selectIngredients}> <div className={styles.selector}>
      <Tab value="Булки" active={selectIngredients === 'Булки'} onClick={()=>setSelectIngredients("Булки")}>
      Булки
      </Tab>
      <Tab value="Соусы" active={selectIngredients === 'Соусы'} onClick={()=>setSelectIngredients("Соусы")}>
      Соусы
      </Tab>
      <Tab value="Начинки" active={selectIngredients === 'Начинки'} onClick={()=>setSelectIngredients("Начинки")}>
      Начинки
      </Tab>
    </div></a>
    <section className={styles. ingredientsTypes}>
    <Ingredients title="Булки" data={data} type='bun'/>
    <Ingredients title="Соусы" data={data} type='sauce'/>
    <Ingredients title="Начинки" data={data} type='main'/>
    </section>
      </div>
  )
}

export default BurgerIngredients