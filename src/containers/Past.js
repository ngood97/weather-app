import {connect} from 'react-redux';

import {addToCityList} from '../actions.js'
import {prioritizeCity,getWeatherData} from '../actions.js'
import Past_Searches from '../components/Past_Searches'

const mapStateToProps = (state, ownProps) => {
    console.log(state.cityList[0]);
    return{
        fetching: state.toggleRetrieveData,
        pastCities: state.cityList,
        updated: state.firstUpdate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{onListClick: (pastCity) => {
        dispatch(prioritizeCity(pastCity));
        dispatch(getWeatherData(pastCity));
    }}
}

const pastSearches = connect(
    mapStateToProps,
    mapDispatchToProps
)(Past_Searches)

export default pastSearches;