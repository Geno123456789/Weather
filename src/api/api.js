import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})

export const weatherApi = {
    getCityName(town = 'Minsk') {
        return instance.get(`weather?q=${town}&units=metric&appid=f570f866ddbd1afb342a8cb2799dcf38`)
    },
    forWeekForecast(town = 'Minsk'){
        return instance.get(`forecast?q=${town}&units=metric&appid=f570f866ddbd1afb342a8cb2799dcf38`)
        // .then( res => res.data.list ) 
    }
}

// "https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=f570f866ddbd1afb342a8cb2799dcf38"


