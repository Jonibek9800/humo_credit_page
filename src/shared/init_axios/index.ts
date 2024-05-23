import axios from "axios";

export const BASE_URL = "http://192.168.100.59:1337";

export const instance = axios.create({
  baseURL: `${BASE_URL}/api`,
});
