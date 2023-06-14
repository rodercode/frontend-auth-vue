/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This is a interceptor file that passing in jwt for requests that require Authorization header
 */

import jwtService from "@/service/jwtService";
import axios, { type InternalAxiosRequestConfig } from "axios";
const tokenAxios = axios.create();

tokenAxios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization =
    "Bearer " + jwtService.getJwt("jwt").accessToken;
  return config;
});

export default tokenAxios;