import { connect } from "react-redux";
import { getWeather, updateCity } from "../../redux/main-reducer";
import Main from "./Main";
import Weather from "./Weather";
import React from "react";


class MainAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getWeather(this.props.name, this.props.nameCity);
    
    }
   
    render() {
        return <>
            <Main name={this.props.name} />
            <Weather name={this.props.name}/>
            
        </>
    }
}


const mapStateToProps = (state) => {
       return {
        name: state.cityName.name,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWeather: () => {dispatch(getWeather())},
        updateCity: (nameCity)=>{dispatch(updateCity(nameCity))}
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainAPIComponent);
export default MainContainer;