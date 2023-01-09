import axios from 'axios';

let baseURL;
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://fakerapi.it/api/v1/books?_quantity=3';
} else {
  baseURL = 'https://fakerapi.it/api/v1/books?_quantity=2';
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
    console.log(config);
    config.headers['Accept'] = 'application/vnd.dpexpo.v1+json';
    config.baseURL = baseURL;
    config.timeout = 10000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// get
export function getAxios(url = baseURL, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err, '1');
        reject(err);
      });
  });
}

// post
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
