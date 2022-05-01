import { useRef } from "react";
import WeatherData from "./WeatherData";


const Weather = (props) => {
    console.log(props)
    const myRef = useRef(null)
    const onSearchClick = () => {
        const town = myRef.current.value;
        props.addCityName(town)
    };
    const onChangedClick = () => {
        props.onCityChanged(props.town)
    }
    return (
        <div>
            <div>
                <input ref={myRef} type='text' placeholder='City' onChange={onSearchClick} />
                <button onClick={onChangedClick} >search</button>
            </div>
            <div>
                {props.data && <div><WeatherData city={props.data.name} temp={props.data.main.temp} pressure={props.data.main.pressure} windSpeed={props.data.wind.speed} condition={props.data.weather[0].main} /></div>}
            </div>
        </div>
    )
}

export default Weather;