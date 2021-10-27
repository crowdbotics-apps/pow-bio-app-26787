export const appConfig = {
    API_BASE_URL:  process.env.NODE_ENV === 'production' ? 'https://<app_id>.botics.co' : 'http://localhost:8000',
    defaultTimeout: 5000,
};
