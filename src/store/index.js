import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import { ingredietnsReducer } from "./ingridientsReducer";

const rootReducer = combineReducers({
    ingredients: ingredietnsReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))