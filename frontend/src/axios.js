import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  validateStatus: (status) => {
    // handling our own errors less than 500 status
    return status < 500;
  },
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Token " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
