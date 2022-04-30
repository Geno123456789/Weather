import { weatherApi } from "../api/api";

const SEND_BUTTON = 'SEND_BUTTON';


const initialState = {
    town: 'Minsk'
    
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_BUTTON:
                       
            return {
                  ...state,  
                 town: action.town
                
            };
              
          default: 
          return state;  
    }
    
}

export const addCityName = (town) => ({ type: SEND_BUTTON, town});

export const getWeatherCity = (town) => {
    
    return async (dispatch) => {
         dispatch(addCityName(town));
        const data = await weatherApi.getCityName(town);
        // console.log(data);
        dispatch(addCityName(data.data.name));
        
    }
    
}



export default weatherReducer;
