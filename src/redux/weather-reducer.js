import { weatherApi } from "../api/api";

const ADD_CITY_NAME = 'ADD_CITY_NAME';
const SET_DATA_WEATHER = 'SET_DATA_WEATHER';

const initialState = {
    town: 'Minsk',
    data: null

}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY_NAME:
            return {
                ...state,
                town: action.town
            };
            case SET_DATA_WEATHER:
                return {
                    ...state,
                    data: action.data
                };    
        default:
            return state;
    }

}

export const addCityName = (town) => ({ type: ADD_CITY_NAME, town });
export const setDataWeather = (data) => ({ type: SET_DATA_WEATHER, data });

export const getWeatherCity = (town) => {
    return async (dispatch) => {
        dispatch(addCityName(town));
        const data = await weatherApi.getCityName(town);
        // console.log(data);
        dispatch(addCityName(data.data.name));
        dispatch(setDataWeather(data.data));
    }

}



export default weatherReducer;
