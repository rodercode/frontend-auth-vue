import axios from "axios";
import jwtService from "./jwtService";
import { Consumer } from "@/model/consumer";
const AUTH_URL = "http://localhost:8000/auth";
export default {
  async login(consumer: Consumer) {
    const res = await axios.post(AUTH_URL + "/login", consumer);
    jwtService.setJwt("jwt", res.data);
  },
  async register(consumer: Consumer) {
    try {
      await axios.post(AUTH_URL + "/register", consumer);
      return "Account successfully created";
    } catch (e) {
      return "Account already exist!";
    }
  },
};
