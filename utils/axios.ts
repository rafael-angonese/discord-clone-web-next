import axios from 'axios';
import Cookies from 'js-cookie';
import handlingErros from './handlingErros';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Accept: 'application/json',
        'Accept-Language': 'pt-BR',
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(async (config) => {
  const token = await Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
    async response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    async error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(handlingErros(error));
    }
);

export default api;
