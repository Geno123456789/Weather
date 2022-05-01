import { useRef } from "react";
import WeatherData from "../WeatherData/WeatherData";
import style from './Weather.module.css'

const Weather = (props) => {
    // console.log(props)
    const myRef = useRef(null)
    
    const onSearchClick = () => {
        const town = myRef.current.value;
        props.addCityName(town);
    };
    const onChangedClick = () => {
        props.onCityChanged(props.town);
        myRef.current.value = '';
    }
    return (
        <div>
            <div className={style.inputBlock}>
                <input ref={myRef} type='text' placeholder='City' onChange={onSearchClick} />
                <button onClick={onChangedClick} >search</button>
            </div>
            <div>
                {props.data && <div><WeatherData city={props.data.name} temp={props.data.main.temp} pressure={props.data.main.pressure} 
                windSpeed={props.data.wind.speed} condition={props.data.weather[0].main} feels_like={props.data.main.feels_like} clouds={props.data.clouds.all} /></div>}
            </div>
        </div>
    )
}

export default Weather;