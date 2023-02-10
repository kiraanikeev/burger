import React from 'react'

import PropTypes from 'prop-types';
import styles from './ModalIngridients.module.css'
function ModalIngridients({currentIngredient}) {
    
    ModalIngridients.propTypes = {
        currentIngredient: PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            proteins: PropTypes.number.isRequired,
        }.isRequired)
    }
  return (
    <>
    <img className={styles.img} src={currentIngredient.image} alt={currentIngredient.name} />
    <h3 className={styles.title}>{currentIngredient.name}</h3>
    <section className={styles.ingredientSection}>
        <div className={styles.ingredient}>
            <span>Калории,ккал</span>
            <span>{currentIngredient.calories}</span>
        </div>
        <div className={styles.ingredient}>
            <span>Белки, г</span>
            <span>{currentIngredient.proteins}</span>
        </div>
        <div className={styles.ingredient}>
            <span>Жиры, г</span>
            <span>{currentIngredient.fat}</span>
        </div>
        <div className={styles.ingredient}>
            <span>Углеводы, г</span>
            <span>{currentIngredient.carbohydrates}</span>
        </div>
    </section>
</>
  )
}

export default ModalIngridients