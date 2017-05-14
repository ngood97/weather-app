import {connect} from 'react-redux';

import {getWeatherData, addToCityList,toggleRetrieveData} from '../actions.js'
import Search_Field from '../components/Search_Field'

const mapStateToProps = (state) => {
    return {
        fetching: state.toggleRetrieveData
    }
}

const mapDispatchToProps = (dispatch) => {

    return{
        onButtonClick: (cityValue) => 
        {
            dispatch(toggleRetrieveData(false));
            dispatch(getWeatherData(cityValue));
        }
    }
}

const searchField = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search_Field)

export default searchField;