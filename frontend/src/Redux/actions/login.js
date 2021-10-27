import * as types from '../constants/login';

// CONTACT US
export const apiLoginRequest = (data) => ({
    type: types.API_LOGIN_REQUEST,
    data
});

export const apiLoginRequestSuccess = (response) => ({
    type: types.API_LOGIN_REQUEST_SUCCESS,
    response
});

export const apiLoginRequestFailed = (response) => ({
    type: types.API_LOGIN_REQUEST_FAILED,
    response
});


export const clearToken = () => ({
    type: types.CLEAR_TOKEN
});
