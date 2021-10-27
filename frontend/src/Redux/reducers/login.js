import * as types from '../constants/login';
import { mapErrorMessage } from '../../Utils/mapErrorMessage';

const INITIAL_STATE = {
    isLoading: false,
    success: false,
    error: null,
    token: null
};

export default function loginApiReducer(state = INITIAL_STATE, action) {
    console.log("Action:", action)
    switch(action.type) {

        // CONTACT US
        case types.API_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                success: false,
                error: null,
                token: null
            };

        case types.API_LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                error: null,
                token: action.response.data.key
            };

        case types.API_LOGIN_REQUEST_FAILED:
            return {
                ...state,
                isLoading: false,
                success: false,
                error: mapErrorMessage(action)
            };

        case types.CLEAR_TOKEN:
            return {
                isLoading: false,
                success: false,
                error: null,
                token: null
            };

        default:
            return state
    }
};
