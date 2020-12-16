import { combineReducers } from 'redux';

const INITIAL = {
    "name": "",
    "post": ""
};

const eventReducer = (state = INITIAL, action) => {
    console.log('event reducer on ' + action.type);
    console.log(action.payload);
    switch (action.type) {
        case 'SET_EVENT_NAME': 
            return {...state, name: action.payload};
        case 'SET_POST_NAME': 
            return {...state, post: action.payload};
        default: 
            return state;
    }
};

export default combineReducers({
    event: eventReducer
});