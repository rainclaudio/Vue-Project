import axios from "axios";

const baseURL = process.env.VUE_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000, // Request timeout limit (10 seconds)
  headers: {
    "Content-Type": "application/json",
  },
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axiosInstance.get(url).then(responseBody),
  post: (url, body) => axiosInstance.post(url, body).then(responseBody),
  put: (url, body) => axiosInstance.put(url, body).then(responseBody),
  del: (url) => axiosInstance.delete(url).then(responseBody),
};

const Articles = {
  get_by_date: (params) => requests.get("/search_by_date?" + new URLSearchParams(params)),
};

const agent = {
  Articles
};

export default agent;
