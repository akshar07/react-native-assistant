import { combineReducers } from 'redux';
 
let dataState = { data: [1,2,3], loading:true };
 
const dataReducer = (state = dataState, action) => {
    
    switch (action.type) {
        case 'DATA_AVAILABLE':
            state = Object.assign({}, state, { data: action.data });
            //console.log(state);
            return state;
        case 'SAVE_USER_PROFILE':
            state = Object.assign({}, state, { userProfile: action.data });
            //console.log(state);
            return state;
        case 'GET_USER_PROFILE':
            state = Object.assign({}, state, { userProfile: action.data});
            //console.log(state);
            return state;
        default:
            return state;
    }
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
})
 
export default rootReducer;