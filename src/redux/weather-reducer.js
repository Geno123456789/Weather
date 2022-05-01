import { weatherApi } from "../api/api";

const ADD_CITY_NAME = 'ADD_CITY_NAME';
const SET_DATA_WEATHER = 'SET_DATA_WEATHER';
const SET_FORECAST = 'SET_FORECAST'

const initialState = {
    town: 'Minsk',
    data: null,
    forecast: null

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
                case SET_FORECAST:
                    return {
                        ...state,
                        forecast: action.forecast
                    };      
        default:
            return state;
    }

}

export const addCityName = (town) => ({ type: ADD_CITY_NAME, town });
export const setDataWeather = (data) => ({ type: SET_DATA_WEATHER, data });
export const setForecast = (forecast) => ({ type: SET_FORECAST, forecast });

export const getWeatherCity = (town) => {
    return async (dispatch) => {
        dispatch(addCityName(town));
        const data = await weatherApi.getCityName(town);
        const response = await weatherApi.forWeekForecast(town);
        dispatch(setForecast(response.data.list ))
        // console.log(response.data.list);
        dispatch(addCityName(data.data.name));
        dispatch(setDataWeather(data.data));

    }
}
// export const getForecast = (forecast) => {
//     return async (dispatch) => {
//         const response = await weatherApi.forWeekForecast(forecast);
//         console.log(response);
//         dispatch(setForecast(response.data.list ));
        
//     }
// }



export default weatherReducer;
