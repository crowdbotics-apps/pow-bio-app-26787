import * as types from '../constants/contactUs';
import { mapErrorMessage } from '../../Utils/mapErrorMessage';

const INITIAL_STATE = {
    isLoading: false,
    success: false,
    error: null,
};

export default function contactUsApiReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        // CONTACT US
        case types.API_CONTACT_US_REQUEST:
            return {
                ...state,
                isLoading: true,
                success: false,
                error: null,
            };

        case types.API_CONTACT_US_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                error: null,
            };

        case types.API_CONTACT_US_REQUEST_FAILED:
            return {
                ...state,
                isLoading: false,
                success: false,
                error: mapErrorMessage(action)
            };

        default:
            return state
    }
};
