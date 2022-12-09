import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const axiosClient = axios.create({
    baseURL: API_URL,
});

axiosClient.interceptors.request.use(function (config: any) {
    const token = localStorage.getItem('AUTH_TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(function (response: any) {
    if (response && response.data) {
        return response;
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default axiosClient;