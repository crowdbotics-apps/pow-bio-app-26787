export const appConfig = {
    API_BASE_URL:  process.env.NODE_ENV === 'production' ? 'https://pow-bio-app-26787.botics.co' : 'http://localhost:8000',
    defaultTimeout: 5000,
};
