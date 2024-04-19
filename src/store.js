import {createStore, combineReducers} from 'redux';
import headerSliceReducer from "./Header/HeaderSlice";

export const store = createStore(combineReducers({
    header: headerSliceReducer
}));