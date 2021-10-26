const messageMap = {
    'Request failed with status code 400': {
        code: 400,
        message: 'Error: Unable to submit the inquiry.',
    },
    'Request failed with status code 403': {
        code: 403,
        message: 'You do not have access to this resource.',
    },
    'Request failed with status code 500': {
        code: 500,
        message: 'Unexpected Server Error.',
    },
    'Network Error': {
        code: null,
        message: 'Please check your internet connection.',
    },
};


export const mapErrorMessage = action => {
    console.log("action: ", action);
    const message = action.response?.message;

    if (messageMap[message]) {
        let code = messageMap[message].code;

        if (action.type === 'API_CONTACT_US_REQUEST_FAILED' && code === 400) {
            return { code, message: 'Error: Unable to submit the inquiry.', type: action.type };
        }else if (action.type === 'API_LOGIN_REQUEST_FAILED' && code === 400) {
            return { code, message: 'Unable to login with the provided credentials', type: action.type };
        } else {
            return { ...messageMap[message], type: action.type };            
        }

    } else {
        return { code: null, message, type: action.type };
    }
};