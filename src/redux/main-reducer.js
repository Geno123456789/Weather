import { weatherApi } from "../api/api";

const SET_CITY_NAME = 'SET_CITY_NAME';
const UPDATE_CITY = 'UPDATE_CITY';


const initialState = {
    name: null
}

const mainReducer = (state=initialState, action) => {
      switch(action.type){
          case SET_CITY_NAME:
              return {
                ...state, name: action.name
              };
              case UPDATE_CITY:
              return {
                ...state, name: action.nameCity
              };
              default:
                  return state;
      }  
}

export const setCityName = (name) => ({ type: SET_CITY_NAME, name });
export const updateCity = (nameCity) => ({ type: UPDATE_CITY, nameCity });

export const getWeather = (nameCity) => {
    
    return async (dispatch) => {
        const data = await weatherApi.getCityName(nameCity);
        dispatch(setCityName(data.data.name));
    }
    
}


export default mainReducer;