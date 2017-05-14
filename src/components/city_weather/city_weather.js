import React, { Component } from 'react';
import './city_weather.css';

class City_Weather extends Component{ 
    render(){
        const {cityName,weatherName,updated} = this.props;
        return(
            updated ?
            <div><h2>{cityName}:</h2> <div className="weatherName">{weatherName}</div></div>
            :null
        );
    }


}

/*City_Weather.propTypes = {
    cityName: PropTypes.string.isRequired,
    weatherName: PropTypes.string.isRequired
}*/

export default City_Weather