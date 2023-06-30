import React, { FC, LegacyRef } from "react";
import styles from './IngredientsList.module.scss';
import Ingredient from '../Ingredient/Ingredient';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from "../../utils/ingredientPropTypes";
import { TIngredient } from "../../utils/types";

type TIngredientsListProps ={
    title:string,
    currentType:string,
    ingredients: null | TIngredient[],
    currentRef: LegacyRef<HTMLUListElement>
}

const IngredientsList:FC<TIngredientsListProps> = ({ title, currentType, ingredients, currentRef }) => {
    return (
        <>
            <h2 className={styles.ingredientsTitle}>{title}</h2>
            <ul className={styles.ingredientsList} ref={currentRef} id={currentType + "List"}>
                {ingredients !== null && ingredients.map((item, index:number) => {
                    if (item.type === currentType) {
                        return (
                            <Ingredient key={item._id} item={item} />
                        )
                    }

                })}
            </ul>
        </>
    )
}

// IngredientsList.propTypes = {
//     title: PropTypes.string.isRequired,
//     currentType: PropTypes.string.isRequired,
//     ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired),
//     currentRef: PropTypes.func.isRequired
// }

export default IngredientsList