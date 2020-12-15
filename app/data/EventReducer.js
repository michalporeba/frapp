import { combineReducers } from 'redux';

const INITIAL = {
    "name": "",
    "post": ""
};

const eventReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case 'SET_EVENT_NAME': 
            return {...state, event: action.payload};
        default: 
            return state;
    }
};

export default combineReducers({
    event: eventReducer
});