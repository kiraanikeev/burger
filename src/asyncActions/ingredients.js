import { addIngredietntsAction } from "../store/ingridientsReducer";

const ingredientsUrl = 'https://norma.nomoreparties.space/api/ingredients'

export const fetchIngredients = () => {
    return function (dispatch) {
        fetch(ingredientsUrl,{
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then(json => dispatch(addIngredietntsAction(json)))
        .catch((error) => {
            console.error('Error:', error);
          })
        }
    }
