import axios from 'axios';

let URL = process.env.NX_DEV_URL;
if (process.env.NODE_ENV === 'production') {
  URL = process.env.NX_PROD_URL;
  console.log(URL, 'prod env');
} else {
  URL = process.env.NX_DEV_URL;
  console.log(URL, 'dev env');
}
// const instance = axios.create({
//   // .. congigure axios baseURL
//   baseURL: `${URL}`
// });
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// axios.interceptors.request.use(
//   (config) => {
//     console.log(config);
//     config.headers['Accept'] = 'application/vnd.dpexpo.v1+json';
//     config.baseURL = baseURL;
//     config.timeout = 10000;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// get
export function getAxios(url = URL) {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err, 'error');
    });
}

export default axios;
