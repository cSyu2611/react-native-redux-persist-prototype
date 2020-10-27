export const SET_USER_NAME = "SET_USER_NAME";
export const setUserName = userName => {
    return {
        type: SET_USER_NAME,
        payload: userName
    }
}

export const SET_AGE = "SET_AGE";
export const setAge = age => {
    return {
        type: SET_AGE,
        payload: age
    }
}

export const SET_EMAIL = "SET_EMAIL";
export const setEmail = email => {
    return {
        type: SET_EMAIL,
        payload: email
    }
}

export const RESET_STATE = "RESET_STATE";
export const resetState = () => {
    return {
        type: RESET_STATE
    }
}