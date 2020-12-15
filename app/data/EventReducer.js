import { combineReducers } from 'redux';

const INITIAL = {
    "event": "",
    "post": ""
};

const eventReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case 'SET_EVENT': 
            return {...state, event: action.payload};
        default: 
            return state;
    }
};

export default combineReducers({
    event: eventReducer
});