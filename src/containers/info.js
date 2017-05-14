import {connect} from 'react-redux';
//import {}
import City_Weather from '../components/city_weather';

const mapStateToPropsCW = (state) => {
    return {
        cityName: state.currCity.name,
        weatherName: state.currCity.weatherName,
        updated: state.firstUpdate,
    }
}

const mapDispatchToPropsCW = (dispatch) => {
    return{}
}

const cityWeather = connect(
    mapStateToPropsCW,
    mapDispatchToPropsCW
)(City_Weather)

export default cityWeather;