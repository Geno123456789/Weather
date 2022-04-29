import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/"
})

export const weatherApi = {
    
    getCityName(nameCity='Minsk'){
            return instance.get(`weather?q=${nameCity}&units=metric&appid=f570f866ddbd1afb342a8cb2799dcf38`)
    }
}

// "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f570f866ddbd1afb342a8cb2799dcf38"




