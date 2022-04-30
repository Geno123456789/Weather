import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getWeatherCity, sendButtonAC } from "../../redux/test-reducer";
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
            <Weather onCityChanged={this.onCityChanged} {...this.props} />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        tests: state.tests,
        town: state.tests.town
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendCityTest: (town) => { dispatch(sendButtonAC(town)) },
        getWeatherCity: (town) => { dispatch(getWeatherCity(town)) }
    }
}




const WeatherContainer = compose(connect(mapStateToProps, mapDispatchToProps))(WeatherAPIComponent);

export default WeatherContainer;