import axios from 'axios';
import { appConfig } from '../../Config/app';

const authAPI = axios.create({
    baseURL: appConfig.API_BASE_URL,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

function apiLoginRequest(action) {
    return authAPI.post(`/rest-auth/login/`, action.data, null);
}

export const loginServices = {
    apiLoginRequest,
}
