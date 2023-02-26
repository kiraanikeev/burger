const ADD_INGREDIENTS = "ADD_INGREDIENTS"

const defaultState ={
    ingredients : []
}
export const ingredietnsReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_INGREDIENTS:
            return {...state, ingredients: action.payload}
            default:
                return state
    }
}

export const addIngredietntsAction = (payload) => ({type:ADD_INGREDIENTS, payload})