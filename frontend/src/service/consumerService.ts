import tokenAxios from "@/interceptor/tokenAxios";
import jwtService from "./jwtService";

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
