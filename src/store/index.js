import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import { burgerConstructorReducer } from "./burgerConstructorReducer";
import { currentIngredientReducer } from "./currentIngredientReducer";
import { ingredietnsReducer } from "./ingridientsReducer";
import { orderReducer } from "./orderReducer";

const rootReducer = combineReducers({
    ingredients: ingredietnsReducer,
    constructor: burgerConstructorReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))