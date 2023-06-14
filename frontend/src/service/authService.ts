/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This file is a auth service meant to generate new users and jwt
 */

import axios from "axios";
import jwtService from "./jwtService";
import { Consumer } from "@/model/consumer";
const AUTH_URL = "http://localhost:8000/auth";

export default {
  // Generate a jwt when user login in
  async login(consumer: Consumer) {
    try {
      const res = await axios.post(AUTH_URL + "/login", consumer);
      jwtService.setJwt("jwt", res.data);
      return "Successfully";
    } catch (e) {
      return "Incorrect username or password";
    }
  },

  // Generate new user
  async register(consumer: Consumer) {
    try {
      await axios.post(AUTH_URL + "/register", consumer);
      return "Account successfully created";
    } catch (e) {
      return "Account already exist!";
    }
  },
};
