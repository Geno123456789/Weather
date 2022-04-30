import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import  weatherReducer from "./weather-reducer";


const reducers = combineReducers({
    cityName:  weatherReducer
    
})

const store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware));

window.store=store

export default store;

