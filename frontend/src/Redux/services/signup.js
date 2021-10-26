import axios from 'axios';
import { appConfig } from '../../Config/app';

const authAPI = axios.create({
    baseURL: appConfig.API_BASE_URL,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

function apiSignupRequest(action) {
    return authAPI.post(`/rest-auth/registration/`, action.data, null);
}

export const signupServices = {
    apiSignupRequest,
}
