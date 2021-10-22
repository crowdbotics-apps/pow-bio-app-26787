import axios from 'axios';
import { appConfig } from '../../Config/app';

const authAPI = axios.create({
    baseURL: appConfig.API_BASE_URL,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

function apiContactUsRequest(action) {
    return authAPI.post(`/api/v1/contact_us/`, action.data, null);
}


export const contactUsServices = {
    apiContactUsRequest,
}
