import { useRef } from "react";


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
            <input ref={myRef} type='text' placeholder='City' onChange={onSearchClick} />
            <button onClick={onChangedClick} >search</button>
            {/* <div>{props.data.town}</div> */}
            <div>
                {props.data && <div><b>City</b>: {props.data.name}</div> }
                {props.data && <div><b>Temperature</b>: {props.data.main.temp}</div> }
                {props.data && <div><b>Pressure</b>: {props.data.main.pressure}</div> } 
                {props.data && <div><b>Wind speed</b>: {props.data.wind.speed}</div> }
                {props.data && <div><b>Pressure</b>: {props.data.weather[0].main}</div> }
            </div>
        </div>
    )
}

export default Weather;