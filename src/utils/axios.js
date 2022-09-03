import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lws-server-client.herokuapp.com",
});

export default axiosInstance;
