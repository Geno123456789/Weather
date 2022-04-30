import { useRef } from "react";


const Weather = (props) => {
console.log(props)
    const myRef = useRef(null)
    const onSearchClick = () => {
        const town = myRef.current.value;
        props.sendCityTest(town)
    };
    const onChangedClick = () => {
        props.onCityChanged(props.tests.town)
    }
    return (
        <div>
            <p onClick={onChangedClick}>{props.tests.town}</p>
            <input ref={myRef} type='text' placeholder='City' onChange={onSearchClick} />
            <button onClick={onChangedClick} >search</button>
        </div>
    )
}

export default Weather;