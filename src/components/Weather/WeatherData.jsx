

const WeatherData = (props) => {

    return (
        <div>
            <div><b>City</b>: {props.city}</div>
            <div><b>Temperature</b>: {props.temp}</div>
            <div><b>Pressure</b>: {props.pressure}</div>
            <div><b>Wind speed</b>: {props.windSpeed}</div>
            <div><b>Pressure</b>: {props.condition}</div>
        </div>
    )
}

export default WeatherData;