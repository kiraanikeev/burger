import { useDispatch, useSelector } from "react-redux";
import styles from "./ConstructorIngredient.module.scss";
import PropTypes from 'prop-types';
import { ingredientPropTypes } from "../../utils/ingredientPropTypes";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { moveConstructorIngredientAction, getMovedIngredientAction, removeConstructorIngredientAction } from "../../services/actions/burgerConstructorActions";
import { decreaseIngredientCountAction } from "../../services/actions/ingredientsActions";
import { TIngredient } from "../../utils/types";
import { FC, DragEvent, MouseEvent} from "react";

type ConstructorIngredientProps = {
    item: TIngredient,
    index: number,
    movedIngredient: TIngredient | null,
    setMovedIngredient: Function,
}

const ConstructorIngredient:FC<ConstructorIngredientProps> = ({ item, index, movedIngredient, setMovedIngredient }) => {
    const dispatch = useDispatch();

    function dragStartHandler(e:DragEvent, index: number, item: TIngredient) {
        dispatch(getMovedIngredientAction(index))
        setMovedIngredient({ item: item, index: index })
    }

    function dragEndHandler(e:any) {
        e.target.style.opacity = 1
    }

    function dragOverHandler(e: DragEvent | any) {
        e.preventDefault();
        e.target.style.opacity = .8;
    }

    function dropHandler(e:DragEvent, index: number, item: TIngredient) {
        e.preventDefault();
        if (movedIngredient !== null) {
            dispatch(moveConstructorIngredientAction({ dropitem: item, dropindex: index, moveditem: movedIngredient }))
            setMovedIngredient(null)
        }
        
    }

    function removeIngredient(item: TIngredient) {
        dispatch(removeConstructorIngredientAction(item.constructorId))
        dispatch(decreaseIngredientCountAction(item._id))
    }

    return (
        <li draggable={true}
            className={styles.ingredient}
            onDragStart={(e) => dragStartHandler(e, index, item)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, index, item)}
        >
                <DragIcon type="primary" />

            <ConstructorElement
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => removeIngredient(item)}
                
            />
        </li>
    )
}

// ConstructorIngredient.propTypes = {
//     item: ingredientPropTypes,
//     index: PropTypes.number.isRequired,
//     movedIngredient: PropTypes.any.isRequired,
//     setMovedIngredient: PropTypes.func.isRequired,
// }

export default ConstructorIngredient;