const cityList = (state  = [], action) => {
    let seen = -1;
    for(let i = 0;i<state.length;i++){
        if(state[i]===action.city){
            seen = i;
        }
    }
    switch (action.type){
        case 'ADD_CITY_LIST':
            if(seen === -1){
                if(state.length>4){
                  return state.slice(1,6).concat(action.city);
                }
                else{
                    return state.concat(action.city)
                }
            }
            else{
                return state.slice(0,seen).concat(state.slice(seen+1,state.length)).concat(action.city);
            }
            
        case 'PRIORITIZE_CITY':
            
            if(seen>-1){
                return state.slice(0,seen).concat(state.slice(seen+1,state.length)).concat(action.city);
            }
            return state;
        default:
            return state;
    }

}

export default cityList;