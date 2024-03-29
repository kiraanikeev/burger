import { createStore, applyMiddleware, AnyAction, Store } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk, { ThunkDispatch } from "redux-thunk"
import { rootReducer } from './reducers/rootReducer';

export const store: TStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))
  

export type TAppState = ReturnType<typeof rootReducer>;
export type TDispatch = ThunkDispatch<TAppState, void, AnyAction>;
export type TStore = Store<TAppState, AnyAction> & { dispatch: TDispatch };
export type TGetState = () => TAppState;