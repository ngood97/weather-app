//import thunk from 'redux-thunk'
import $ from 'jquery';

export const ADD_CITY_INFO = 'ADD_CITY_INFO'
export const ADD_CITY_LIST = 'ADD_CITY_LIST'
export const PRIORITIZE_CITY = 'PRIORITIZE_CITY'
export const TOGGLE_RETRIEVE_DATA = 'TOGGLE_RETRIEVE_DATA'
export const FIRST_UPDATE = 'FIRST_UPDATE';

export function firstUpdate({updated}){
    return{type: FIRST_UPDATE, updated};
}

export function addCityInfo({name,woeid,weatherNameAbbr,weatherName,temperature}){
    return {type: ADD_CITY_INFO, city:{name, woeid, weatherNameAbbr, weatherName,temperature}}
}

export function addToCityList(city){
    return {type: ADD_CITY_LIST, city}
}

export function prioritizeCity(city){
    return {type: PRIORITIZE_CITY, city}
}

export function toggleRetrieveData(fetching){
    console.log(!fetching);
    return{type: TOGGLE_RETRIEVE_DATA, fetching}
}

export function getWeatherData(city){
    return function (dispatch) {
        console.log("getting... " + city);
        $.getJSON("https://www.metaweather.com/api/location/search/?query=" + city, function(result){
            if(result[0]){
                console.log("holding onto " + result[0].title);
                $.getJSON("https://www.metaweather.com/api/location/" + result[0].woeid, function(weatherInfo){
                    console.log("modifying state")
                    dispatch(addCityInfo({
                    name:result[0].title,
                    woeid:result[0].woeid, 
                    weatherNameAbbr:weatherInfo.consolidated_weather[0].weather_state_abbr,
                    weatherName:weatherInfo.consolidated_weather[0].weather_state_name,
                    temperature:weatherInfo.consolidated_weather[0].the_temp}
                    ));
                        console.log("modified currCity")
                    dispatch(addToCityList(result[0].title));
                    console.log("modified city list")
                    dispatch(toggleRetrieveData(true));
                    console.log("GREAT SUCCESS\nNew State is:\ncity:\n   name:" + result[0].title 
                    + "\n   woeid:" + result[0].woeid
                    + "\n   weatherName:" + weatherInfo.consolidated_weather[0].weather_state_name
                    + "\n   weatherNameAbbr:" + weatherInfo.consolidated_weather[0].weather_state_abbr
                    + "\n   Temperature:" + weatherInfo.consolidated_weather[0].the_temp);
                    document.getElementById('city').value = "";
                    dispatch(firstUpdate(true));
                }); 
            }
            else{
                console.log("Search Failed");
                document.getElementById('city').value = "";
            }
        });
    console.log("synchronous continuing");
    }
}

