import axios from 'axios';

let baseURL;
if (process.env.NODE_ENV === 'production') {
  baseURL = process.env.NX_PROD_BASEURL;
  console.log(baseURL, 'prod env');
} else {
  baseURL = process.env.NX_DEV_BASEURL;
  console.log(baseURL, 'dev env');
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
        console.log(err, 'error');
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
