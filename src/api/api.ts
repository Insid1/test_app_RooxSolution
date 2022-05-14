import axios, {
  AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig,
} from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const REQUEST_TIMEOUT = 5000;
// UnAuthorization function is implemented to work with real server
type UnauthorizedCallback = () => void;

const createApi = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError) => Promise.reject(error),
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => config,
  );

  return api;
};

const api = createApi(() => {});

export { api };
export default createApi;
