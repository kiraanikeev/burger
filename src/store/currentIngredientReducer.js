const SET_CURRENT_INGREDIENTS = "SET_CURRENT_INGREDIENTS"
const DELETE_CURRENT_INGREDIENTS = "DELETE_CURRENT_INGREDIENTS"

const defaultState ={
    currentIngredients : null
}
export const currentIngredientReducer = (state = defaultState, action) => {
    switch (action.type){
        case SET_CURRENT_INGREDIENTS:
            return {...state, currentIngredients: action.payload}
        case DELETE_CURRENT_INGREDIENTS:
            return {...state, currentIngredients: null}
            default:
                return state
    }
}

export const setCurrentIngredietntsAction = (payload) => ({type:SET_CURRENT_INGREDIENTS, payload})
export const deleteCurrentIngredietntsAction = (payload) => ({type:DELETE_CURRENT_INGREDIENTS})