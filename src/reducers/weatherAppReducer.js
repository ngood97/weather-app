import { combineReducers } from 'redux';
import toggleRetrieveData from './retreiveDataReducer';
import currCity from './currCityReducer'
import cityList from './cityListReducer'
import firstUpdate from './firstUpdateReducer'

const weatherAppReducer = combineReducers({
    firstUpdate,
    toggleRetrieveData,
    currCity,
    cityList
})

export default weatherAppReducer;