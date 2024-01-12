import axios from "axios";

const API_BASE_URL = "https://www.azki.com/api/";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

instance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
);

instance.interceptors.request.use(
  (req) => req,
  (error) => Promise.reject(error)
);

export default instance;
