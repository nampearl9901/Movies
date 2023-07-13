import axios from "axios";
import { BAT_LOADING, TAT_LOADING } from "redux/reducers/spinnerContant";
import { store } from "../index.js";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzM0UiLCJIZXRIYW5TdHJpbmciOiIxOS8wNC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODE4NjI0MDAwMDAiLCJuYmYiOjE2NTQzNjIwMDAsImV4cCI6MTY4MjAxMDAwMH0.8vVBHKZZpOpTUa6ep4mWe7SQc5U-y_8IFYOnVCJLEgI";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";

export const configHeaders = () => {
  return {
    TokenCybersoft: TOKEN_CYBERSOFT,
  };
};

// axios Instance

export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaders(),
});
// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch({
      type: BAT_LOADING,
    });

    console.log("before axios");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    store.dispatch({
      type: TAT_LOADING,
    });
    console.log("after");

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);
