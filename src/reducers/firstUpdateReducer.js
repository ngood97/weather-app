function firstUpdate(state = false, action){
    switch(action.type){
        case 'FIRST_UPDATE':
            return {updated: action.updated};
        default:
            return state;   
    }
}



export default firstUpdate;