/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: I'm planing on to remove this file in the future
 */

import tokenAxios from "@/interceptor/tokenAxios";
import jwtService from "./jwtService";
import { Token } from "@/model/token";

export default {
  getConsumer(token: Token): {
    username: string;
    password: string;
    role: string;
  } {
    try {
      return {
        username: jwtService.decodeJwt(token).username,
        password: "",
        role: jwtService.decodeJwt(token).role,
      };
    } catch (e) {
      return {
        username: "none",
        password: "none",
        role: "none",
      };
    }
  },
};
