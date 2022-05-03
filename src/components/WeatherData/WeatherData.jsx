import style from './WeatherData.module.css'

import cloudy_day from '../../assets/img/cloudy_day.png';
import thunder from '../../assets/img/thunder.png';
import drizzle from '../../assets/img/drizzle.png';
import rainy from '../../assets/img/rainy.png';
import snow from '../../assets/img/snowy.png';
import sunny from '../../assets/img/sunny.png';
import noData from '../../assets/img/no-data-icon.jpg'

const WeatherData = (props) => {

    let img;
    switch (props.condition) {
        case "Clouds":
            img = cloudy_day
            break;

        case "Thunderstorm":
            img = thunder;
            break;

        case "Drizzle":
            img = drizzle;
            break;

        case "Rain":
            img = rainy;
            break;

        case "Snow":
            img = snow;
            break;

        case "Clear":
            img = sunny;
            break;

        default:
            img = noData;
            break;
    }


    return (
        <div>
            <div className={style.cityName}>{props.city}</div>
            <div className={style.data}>
                <div className={style.condition}>
                    <img src={img} alt="" />
                    <p>{props.condition}</p>
                </div>
                <div className={style.temp}>{Math.round(props.temp) + '°C'}</div>
                <div className={style.weatherData}>
                    <div>Feels Like: {Math.round(props.feels_like) + '°C'}</div>
                    <div>Clouds: {props.clouds + ' %'}</div>
                    <div>Pressure: {props.pressure + ' hPa'}</div>
                    <div>Wind: {props.windSpeed + ' km/h'}</div>
                </div>
            </div>
         
        </div>
    )
}

export default WeatherData;