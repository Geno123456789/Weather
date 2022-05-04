import { weatherApi } from "../api/api";

const ADD_CITY_NAME = 'ADD_CITY_NAME';
const SET_DATA_WEATHER = 'SET_DATA_WEATHER';
const SET_FORECAST = 'SET_FORECAST';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    town: 'Minsk',
    data: null,
    forecast: null,
    isFetching: true
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
                    case TOGGLE_IS_FETCHING:
                        return {
                            ...state,
                            isFetching: action.isFetching
                        };        
        default:
            return state;
    }

}

export const addCityName = (town) => ({ type: ADD_CITY_NAME, town });
export const setDataWeather = (data) => ({ type: SET_DATA_WEATHER, data });
export const setForecast = (forecast) => ({ type: SET_FORECAST, forecast });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getWeatherCity = (town) => {
    
    return async (dispatch) => {
        dispatch(addCityName(town));
        dispatch(toggleIsFetching(true));
        const data = await weatherApi.getCityName(town)
        .catch(err => {alert('You entered the wrong city.Try again')});
        dispatch(toggleIsFetching(false));
        const response = await weatherApi.forWeekForecast(town);
        dispatch(setForecast(response.data.list));
        dispatch(addCityName(data.data.name));
        dispatch(setDataWeather(data.data));

    }
}


export default weatherReducer;
