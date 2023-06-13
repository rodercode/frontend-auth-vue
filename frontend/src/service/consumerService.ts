import jwtService from "./jwtService";

export default {
  getConsumer(token: Token): { username: string; role: string } {
    try {
      return {
        username: jwtService.decodeJwt(token).username,
        role: jwtService.decodeJwt(token).role,
      };
    } catch (e) {
      return {
        username: "none",
        role: "none",
      };
    }
  },
};
