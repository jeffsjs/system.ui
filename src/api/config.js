import axios from 'axios';
import config from '../config'

const instance = axios.create({
  baseURL: config.baseURL,
  timeout: 60000,
  headers: {
    'Authorization': config.authToken
  }
});

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = sessionStorage.getItem('accounts_token');
  return config;
})

// instance.interceptors.response.use(null, function (error) {
//   if ((error.response.status === 401 || error.response.status === 403) && history.location.pathname !== '/login') {
//     history.push('/login')
//   }
//   return Promise.reject(error);
// });
export default instance;
