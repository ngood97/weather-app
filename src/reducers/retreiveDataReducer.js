function toggleRetrieveData(state = false, action){
    switch(action.type){
        case 'TOGGLE_RETRIEVE_DATA':
            return {fetching: !action.fetching};
        default:
            return state;   
    }
}



export default toggleRetrieveData;