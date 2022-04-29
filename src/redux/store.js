import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import mainReducer from "./main-reducer";
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    cityName: mainReducer
    
})

const store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware));


export default store;

