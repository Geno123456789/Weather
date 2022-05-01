import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})

export const weatherApi = {
    getCityName(town = 'Minsk') {
        return instance.get(`weather?q=${town}&units=metric&appid=f570f866ddbd1afb342a8cb2799dcf38`)
    },
    forWeek(city){
        return instance.get(`forecast?q=${city}&lang=ru&units=metric&appid=471fb871540b1cabfd3ed0bce031cb0d`)
        .then( res => res.data.list ) 
    }
}

// "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f570f866ddbd1afb342a8cb2799dcf38"


