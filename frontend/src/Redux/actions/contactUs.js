import * as types from '../constants/contactUs';

// CONTACT US
export const apiContactUsRequest = (data) => ({
    type: types.API_CONTACT_US_REQUEST,
    data
});

export const apiContactUsRequestSuccess = (response) => ({
    type: types.API_CONTACT_US_REQUEST_SUCCESS,
    response
});

export const apiContactUsRequestFailed = (response) => ({
    type: types.API_CONTACT_US_REQUEST_FAILED,
    response
});
