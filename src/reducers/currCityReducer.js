const currCity = (state = {}, action) => {
    switch(action.type){
        case 'ADD_CITY_INFO':
            console.log("action city name = " + action.city.weatherNameAbbr);
            return Object.assign({},state, action.city);
        default:
            return state;
    }
}

export default currCity;
