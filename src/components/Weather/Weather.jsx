import { useRef } from "react";


const Weather = (props) => {
console.log(props)
    const myRef = useRef(null)
    const onSearchClick = () => {
        const town = myRef.current.value;
        props.addCityName(town)
    };
    const onChangedClick = () => {
        props.onCityChanged(props.cityName.town)
    }
    return (
        <div>
            <p onClick={onChangedClick}>{props.cityName.town}</p>
            <input ref={myRef} type='text' placeholder='City' onChange={onSearchClick} />
            <button onClick={onChangedClick} >search</button>
        </div>
    )
}

export default Weather;