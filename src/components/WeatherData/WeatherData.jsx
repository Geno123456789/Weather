import style from './WeatherData.module.css'

const WeatherData = (props) => {

    return (
        <div>
            <div className={style.cityName}>{props.city}</div>

            <div><b>Temperature</b>:  {Math.round(props.temp) + '°C'}</div>
            <div><b>Pressure</b>: {props.pressure}</div>
            <div><b>Wind speed</b>: {props.windSpeed}</div>
            <div><b>Pressure</b>: {props.condition}</div>
        </div>
    )
}

export default WeatherData;