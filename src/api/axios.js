import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASIC_URL,
  withCredentials: true, // 异步请求携带cookie
  headers: {},
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // console.log(response)
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data;
    // 这个状态码是和后端约定的
    const code = dataAxios.reset;
    return dataAxios;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error);
    return Promise.reject(error);
  }
);

let api = {};
api.get = function (url) {
  return new Promise((resolve, reject) => {
    instance
      .get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
api.post = function (url, data) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default api;
