import axios from 'axios';

let baseURL;
if (process.env.NODE_ENV === 'production') {
  baseURL = '';
} else {
  baseURL = '';
}

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.request.use(
  (config) => {
    config.headers['Accept'] = 'application/demo.axios.v1+json';
    config.baseURL = baseURL;
    config.timeout = 10000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function getAxios({ url, params = {} }) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        // console.log(res, 'res');
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err, '1');
        reject(err);
      });
  });
}

export function postAxios({ url, data }) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      data,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default axios;
