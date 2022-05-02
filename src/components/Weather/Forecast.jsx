import ForecastItem from './ForecastItem';

const Forecast = (props) => {

    const txtCurrentData = props.forecast[0].dt_txt   
    const txtData = new Date(txtCurrentData).toLocaleString().slice(0,10)
    const days_txt = props.forecast.map(elem => elem.dt_txt);
    const days_txt_data = days_txt.map(elem => new Date(elem).toLocaleString().slice(0,10))
    const days_txt_data_filtered = days_txt_data.filter(item => item === txtData)
    const updateWeatherCurrent = days_txt_data_filtered.length;
    const updateWeatherNextDay =  updateWeatherCurrent + 4;

    return (
        <div>
                <div>
                <div>
                    <ForecastItem day={props.forecast[updateWeatherNextDay].dt} condition={props.forecast[updateWeatherNextDay].weather[0].main} temp={props.forecast[updateWeatherNextDay].main.temp} />
                </div>
                <div>
                    <ForecastItem day={props.forecast[updateWeatherNextDay + 8].dt} condition={props.forecast[updateWeatherNextDay + 8].weather[0].main} temp={props.forecast[updateWeatherNextDay + 8].main.temp} />
                </div>
                <div>
                    <ForecastItem day={props.forecast[updateWeatherNextDay + 16].dt} condition={props.forecast[updateWeatherNextDay + 16].weather[0].main} temp={props.forecast[updateWeatherNextDay + 16].main.temp} />
                </div>
                <div>
                    <ForecastItem day={props.forecast[updateWeatherNextDay + 24].dt} condition={props.forecast[updateWeatherNextDay + 24].weather[0].main} temp={props.forecast[updateWeatherNextDay + 24].main.temp} />
                </div>
                <div>
                    <ForecastItem day={props.forecast[updateWeatherNextDay + 32].dt} condition={props.forecast[updateWeatherNextDay + 32].weather[0].main} temp={props.forecast[updateWeatherNextDay + 32].main.temp} />
                </div>
                            </div>
        </div>
    )
}

export default Forecast;