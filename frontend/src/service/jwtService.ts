import cacheService from "./cacheService";

export default {
  // Save jwt in local storage
  setJwt(key: string, token: Token): void {
    cacheService.setLocal(key, token);
  },
  // Get jwt from local storage'
  getJwt(key: string): Token {
    return cacheService.getLocal(key);
  },
  //
  deleteJwt(key: string): void {
    cacheService.setLocal(key, "");
  },

  decodeJwt(token: Token) {
    const parts = token.accessToken.split(".");
    return JSON.parse(atob(parts[1]));
  },
};
