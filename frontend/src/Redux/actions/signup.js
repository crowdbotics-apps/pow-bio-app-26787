import * as types from '../constants/signup';

// SIGNUP
export const apiSignupRequest = (data) => ({
    type: types.API_SIGNUP_REQUEST,
    data
});

export const apiSignupRequestSuccess = (response) => ({
    type: types.API_SIGNUP_REQUEST_SUCCESS,
    response
});

export const apiSignupRequestFailed = (response) => ({
    type: types.API_SIGNUP_REQUEST_FAILED,
    response
});

