import axios from "axios";
import jwtService from "./jwtService";
import { Consumer } from "@/model/consumer";
const AUTH_URL = "http://localhost:8000/auth";
export default {
  login(consumer: Consumer) {
    axios
      .post(AUTH_URL + "/login", consumer)
      .then((res) => jwtService.setJwt("jwt", res.data));
  },
  register(consumer: Consumer) {
    axios
      .post(AUTH_URL + "/register", consumer)
      .then((res) => console.log(res.data));
  },
};