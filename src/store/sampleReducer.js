import {SET_USER_NAME, SET_AGE, SET_EMAIL, RESET_STATE} from './actions';

const initialState = {
    userName: "",
    age: null,
    email: ""
}

const sampleState = (state = initialState, action) => {
    let nextState = {...state};
    switch(action.type){
        case SET_USER_NAME:
            nextState.userName = action.payload;
            console.log(nextState.userName)
            break;
        case SET_AGE:
            nextState.age = action.payload;
            console.log(nextState.age)
            break;
        case SET_EMAIL:
            nextState.email = action.payload;
            console.log(nextState.email)
            break;
        case RESET_STATE:
            return initialState;
        default:
            return state;
    }
    return nextState;
}

export default sampleState;