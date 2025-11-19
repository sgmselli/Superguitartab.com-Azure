import axios from 'axios';
import type { AxiosInstance } from "axios";

const BASE_URL = "/api/v1";

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});