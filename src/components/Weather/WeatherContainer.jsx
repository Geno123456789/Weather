import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getWeatherCity, addCityName } from "../../redux/weather-reducer";
import Weather from "./Weather";



class WeatherAPIComponent extends React.Component {

    componentDidMount() {

        this.props.getWeatherCity(this.props.town)

    }

    onCityChanged = (town) => {
        this.props.getWeatherCity(town, this.props.town);
    }

    render() {
         return <>
            <Weather onCityChanged={this.onCityChanged} {...this.props}  />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
       data: state.data.data,
       town: state.data.town,
        
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addCityName: (town) => { dispatch(addCityName(town)) },
        getWeatherCity: (town) => { dispatch(getWeatherCity(town)) }
    }
}




const WeatherContainer = compose(connect(mapStateToProps, mapDispatchToProps))(WeatherAPIComponent);

export default WeatherContainer;