import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (!err.response) {
      return Promise.reject({ message: err.message });
    }
    return Promise.reject({
      message: err.response.statusText,
      ...err.response,
      ...err.response.data,
    });
  }
);

export const setAuthorizationHeader = (token) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${token}`);

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};

export default client;
