import axios from "axios";

const api = axios.create({
  baseURL: "https://delicious-api.herokuapp.com"
});

export default api;