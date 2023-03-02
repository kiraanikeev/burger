const GET_CONSTRUCTOR_INGREDIENTS  = 'GET_CONSTRUCTOR_INGREDIENTS';

const defaultState = {
    constructorIngredients: [],
  };

export const burgerConstructorReducer = (state = defaultState, action) => {
    switch (action.type){
        case GET_CONSTRUCTOR_INGREDIENTS:
            const bun = action.payload?.data.find(item=>item.type === 'bun')
            const ingredients = action.payload?.data.filter(item => item.type !== 'bun')
            ingredients.unshift(bun)
            ingredients.push(bun)
            return {...state, constructorIngredients: ingredients}
            default:
             return state
    }
}

export const getBurgerConstructorAction = (payload) => ({type:GET_CONSTRUCTOR_INGREDIENTS, payload})