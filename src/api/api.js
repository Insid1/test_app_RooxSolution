import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const REQUEST_TIMEOUT = 5000;

const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export default createApi;
